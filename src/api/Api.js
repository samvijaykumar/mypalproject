const BaseUrl = 'https://demo.sgvproject.in/pet_mypal_app/api/'
const Sinup=async(data)=>{
    
    const response = await fetch(BaseUrl + 'signup_api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_name: data.Name,
          email: data.email,
          password: data.password, // Sending password with other details
          phone: data.phoneNumber,
          country_code: 91,
          device_token: 'fytf',
        }),
      });

      const data = await response.json();
      console.log('API Response:', data);
      return  data;
}
export {
    Sinup
}