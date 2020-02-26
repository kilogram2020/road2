//Login Page
import React,{Component}from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
// import './login.css';
var obj;
var nam=[];

class Landing extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);//binds function so make it usable in render by this.
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handlechange = this.handlechange.bind(this);
      this.handlechang = this.handlechang.bind(this);
      this.state = {
        dist:""
      }
    }
    componentDidMount(){//function to call the api to fetch the details of UK distrcts and storing their name in array.
      var myHeaders1 = new Headers();
      myHeaders1.append("authority", "uttarakhand-dev.egovernments.org");
      myHeaders1.append("accept", "application/json, text/plain, */*");
      myHeaders1.append("origin", "https://uttarakhand-dev.egovernments.org");
      myHeaders1.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36");
      myHeaders1.append("content-type", "application/json;charset=UTF-8");
      myHeaders1.append("sec-fetch-site", "same-origin");
      myHeaders1.append("sec-fetch-mode", "cors");
      myHeaders1.append("referer", "https://uttarakhand-dev.egovernments.org/employee/language-selection");
      myHeaders1.append("accept-encoding", "gzip, deflate, br");
      myHeaders1.append("accept-language", "en-US,en;q=0.9");
      myHeaders1.append("cookie", "_ga=GA1.2.901079459.1578893683; _gid=GA1.2.2000644538.1580966230");

      var raw1 = "{\"RequestInfo\":{\"apiId\":\"Rainmaker\",\"ver\":\".01\",\"ts\":\"\",\"action\":\"_search\",\"did\":\"1\",\"key\":\"\",\"msgId\":\"20170310130900|hi_IN\",\"authToken\":null},\"MdmsCriteria\":{\"tenantId\":\"uk\",\"moduleDetails\":[{\"moduleName\":\"common-masters\",\"masterDetails\":[{\"name\":\"Department\"},{\"name\":\"Designation\"},{\"name\":\"StateInfo\"}]},{\"moduleName\":\"tenant\",\"masterDetails\":[{\"name\":\"tenants\"},{\"name\":\"citymodule\"}]}]}}";

      var requestOptions = {
        method: 'POST',
        headers: myHeaders1,
        body: raw1,
        redirect: 'follow'
      };

      fetch("https://uttarakhand-dev.egovernments.org/egov-mdms-service/v1/_search?tenantId=uk", requestOptions)
        .then(response => response.text())
        .then(result => {
    obj=JSON.parse(result);
    nam.push({id:0,city:"Select City"})
    for (let i =0;i<obj.MdmsRes.tenant.tenants.length;i++){
      nam.push({id:i+1,city : obj.MdmsRes.tenant.tenants[i].name});
    }
    console.log(nam);
    })
      .catch(error => console.log('error', error));
      
    }
    handlechang(event){//function to make changes to state when values changed by client in ui
      this.setState({dist: 'uk.'+ event.target.value.toLowerCase()}); 
    }
    handleChange(event) {//function to make changes to state when values changed by client in ui
      this.props.edit_user(event.target.value);
    }
    handlechange(event){//function to make changes to state when values changed by client in ui
        this.props.edit_pass(event.target.value);
    }
  
   async handleSubmit(event) { //function to make api calls, verify and authenticate the username and password given by user.
    event.preventDefault();    //And go to page Dashboard if user data is correct.       
    console.log('submitted');
    var user = this.props.user;
    var password = this.props.password;
    var tenant_Id = this.state.dist;
    const body = JSON.stringify({ user, password, tenant_Id });
    console.log(body);
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
      };
      try {
        const res = await axios.post('/api/auth', body, config);
        if(res.status===200){
          this.props.edit_auth(res.data.access_token);
          console.log(res);
          console.log("Succesfull");
          console.log(this.props);
          this.props.handleSuccesfulAuth();
    }
    } catch (error) {
        alert(error)
    }
}
  
    render() {//UI of the login page accesible to client and what changing different field does.
      return (
          <div className="loginbox">
              <img  className="avatar" src={ require('./avatar.png')} />
              <h1>Login Here</h1>
              <form method='POST' onSubmit={this.handleSubmit}>
                <p1>Username</p1><br></br>
                <input type="text" placeholder="Enter Username" value={this.props.user} onChange={this.handleChange} /><br></br>
                <p1>Password</p1><br></br>
                <input type="Password" placeholder="Enter Password" value={this.props.password} onChange = {this.handlechange} /><br></br>
                <p1>District</p1><br></br>
                <select onChange = {this.handlechang}>
            {nam.map(item => (
              <option key={item.id} value={item.city}>
                {item.city}
              </option>
            ))}
          </select><br></br>
                <input type="submit" className='btn btn-primary' value="Submit" /><br></br>
                <a href="/">Forgot Password?</a><br></br>
                <a href="/">Don't have an account</a>
              </form>
              <br></br>
              <br></br>
              <br></br>

              <p2>Authenticated By</p2><img className="digit" src={require('./digit.png')} />
            </div>
      );
    }
  }

  const mapStateToProps = (state) =>{//to give access to redux
    return{
      user:state.user,
      password:state.password,
      auth_token:state.auth_token
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{//saving data entered by user in redux  
    return{
      edit_user : (user) =>{dispatch({type:'EDIT_USERNAME',user : user})},
      edit_pass : (password) =>{dispatch({type:'EDIT_PASSWORD',password : password})},
      edit_auth : (auth_token)=>{dispatch({type:'AUTHENTICATE',auth_token:auth_token})}
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Landing)