get '/' do
  erb :index
end

post '/grandma' do

  user_input = params[:user_input]
  if user_input.upcase == user_input
    reponse = 'Hand me that fifth of vodka will ya?!'
  else
    response = 'WHATTTT!?!?! SPEAK UP!!!'
  end

  # redirect "/?grandma=#{@grandma}"

end