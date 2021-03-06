#
# Copyright (C) 2011 Instructure, Inc.
#
# This file is part of Canvas.
#
# Canvas is free software: you can redistribute it and/or modify it under
# the terms of the GNU Affero General Public License as published by the Free
# Software Foundation, version 3 of the License.
#
# Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
# WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
# A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
# details.
#
# You should have received a copy of the GNU Affero General Public License along
# with this program. If not, see <http://www.gnu.org/licenses/>.
#

require 'action_controller'
require 'action_controller/test_process.rb'

module Canvas::MigrationWorker
  def self.upload_overview_file(file, content_migration)
    uploaded_data = ActionController::TestUploadedFile.new(file.path, Attachment.mimetype(file.path))
    
    att = Attachment.new
    att.context = content_migration
    att.uploaded_data = uploaded_data
    att.save
    begin
      uploaded_data.unlink
    rescue
      Rails.logger.warn "Couldn't unlink overview for content_migration #{content_migration.id}"
    end
    content_migration.overview_attachment = att
    content_migration.save
    att
  end

  def self.upload_exported_data(folder, content_migration)
    file_name = "exported_data_cm_#{content_migration.id}.zip"
    zip_file = File.join(folder, file_name)
    att = nil
    
    begin
      Zip::ZipFile.open(zip_file, 'w') do |zipfile|
        Dir["#{folder}/**/**"].each do |file|
          next if File.basename(file) == file_name
          file_path = file.sub(folder+'/', '')
          zipfile.add(file_path, file)
        end
      end

      upload_file = ActionController::TestUploadedFile.new(zip_file, "application/zip")
      att = Attachment.new
      att.context = content_migration
      att.uploaded_data = upload_file
      att.save
      upload_file.unlink
      content_migration.exported_attachment = att
      content_migration.save
    rescue => e
      content_migration.migration_settings[:last_error] = "#{e.to_s}: #{e.backtrace.join("\n")}"
      Rails.logger.warn "Error while uploading exported data for content_migration #{content_migration.id} - #{e.to_s}"
    end

    att
  end
  
  def self.clear_exported_data(folder)
    begin
      config = Setting.from_config('external_migration')
      if !config || !config[:keep_after_complete]
        FileUtils::rm_rf(folder) if File.exists?(folder)
      end
    rescue
      Rails.logger.warn "Couldn't clear export data for content_migration #{content_migration.id}"
    end
  end
end
