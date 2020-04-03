class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "channel_#{params[:name]}"
  end

  def unsubscribed
  end
end
