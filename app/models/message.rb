class Message < ApplicationRecord
  belongs_to :channel
  belongs_to :user

  after_create :broadcast_message

  validates :content, presence: true

  def as_json(options = {})

    nickname = user.nickname.nil? ? user.email.match(/[^@]+/)[0] : user.nickname

    {
      id: id,
      author: nickname,
      content: content,
      created_at: created_at,
      channel: channel.name,
      nickname: nickname
    }
  end

  private

  def broadcast_message
    ActionCable.server.broadcast("channel_#{channel.name}", self)
  end
end

