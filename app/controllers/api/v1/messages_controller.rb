class Api::V1::MessagesController < ApplicationController
  before_action :retrieve_channel

  def index
    messages = @channel.messages
    render json: messages.to_json(include: :user)
  end

  def create
    message = Message.create(user: current_user, channel: @channel, content: params.dig('message', 'content'))
    render json: { content: message.content, created_at: message.created_at, user: { email: message.user.email }}
  end

  private

  def retrieve_channel
    @channel = Channel.find_by(name: params[:channel_id])
  end
end
