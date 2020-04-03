class Api::V1::ChannelsController < ApplicationController

  # def index
  #   messages = @channel.messages.order('created_at ASC')
  #   render json: messages # see Message.as_json method
  # end

  def create
    channel = Channel.create(name: params[:name])
    render json: channel
  end

end
