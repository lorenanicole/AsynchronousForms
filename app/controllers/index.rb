get '/' do
  @grandma = params[:grandma]
  erb :index
end

post '/grandma' do
  # "Implement the /grandma route yourself.<br>Params: <code>#{params.inspect}</code>"
  # @user_input = params[:user_input]
  # if @user_input.upcase == @user_input
  #   @grandma = 'Hand me that fifth of vodka will ya?!'
  #   redirect "http://localhost:9393/?grandma=#{@grandma}"
  # else
  #   @grandma = 'WHATTTT!?!?! SPEAK UP!!!'
  #   redirect "http://localhost:9393/?grandma=#{@grandma}"
  # end
  redirect ("/")
end