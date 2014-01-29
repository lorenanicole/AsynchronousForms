get '/' do
  @grandma = params[:grandma]
  erb :index
end

post '/grandma' do

  @user_input = params[:user_input]
  if @user_input.upcase == @user_input
    @grandma = 'Hand me that fifth of vodka will ya?!'
  else
    @grandma = 'WHATTTT!?!?! SPEAK UP!!!'
  end

  redirect "/?grandma=#{@grandma}"

end