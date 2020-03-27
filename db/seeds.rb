Message.delete_all; User.delete_all; Channel.delete_all
puts "============Existing Messages, Users, and Channels deleted=============="

Channel.create(name: 'general')
Channel.create(name: 'react')
Channel.create(name: 'paris')

puts "============Created Channels==============="

User.create(email: 'emiel.hagen@gmail.com', password: '123456')
User.create(email: 'donal_trump@gmail.com', password: '123456')
User.create(email: 'scott_morrison@gmail.com', password: '123456')

puts "============Created Users==============="

Message.create(user: User.first, content: 'Hi friends', channel: Channel.find_by(name: 'paris'))
Message.create(user: User.second, content: 'Hi guys', channel: Channel.find_by(name: 'paris'))
Message.create(user: User.third, content: 'How are yall', channel: Channel.find_by(name: 'paris'))

puts "============Created Messages==============="

