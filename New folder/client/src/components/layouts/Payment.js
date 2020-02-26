import React,{Component}from 'react';
import {connect} from 'react-redux';
import Dashboard from './Dashboard';



class Payment extends Component{
    constructor(props){
        super(props);
        this.state={
            payId:'',
            amount:'',
            paidBy:'',
            payerName:'',
            payerMobNo:'',
            msRecieptNo:'',
            msIssueDate: new Date()
        }
        this.gr = this.gr.bind(this);//binds function so make it usable in render by this.
    }
    gr(){
        console.log(this.state);
    }
    render(){
        return(
            <div className="pay">
            <Dashboard />
            <form className="zz">
            <h2>Payment Page</h2><br></br>
            <h3>Payment Information</h3><br></br>
            <label>Unique ID:</label><br></br><br></br>
                <h3>Payement Collection Details</h3><br></br>
                <label>Fee Details :</label><br></br>
                <label>Total Amount :</label><br></br><br></br>
                <h3>Capture Payment</h3><br></br>
                <label>Paid By&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <select value={this.state.paidBy}
    onChange={e => this.setState({ paidBy: e.target.value })}>
    <option value="">select</option>
    <option value="Owner">Owner</option>
    <option value="Other">Other</option>
  </select><br></br>
  <label>Payer Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
  <input type="text" id="payerName" name="payerName" placeholder="Enter Your Name"
    value={this.payerName}
    onChange={e => this.setState({ payerName: e.target.value })}
  /><br></br>
  <label>Payer Mobile No</label>
  <input type="text" id="payerMobNo" name="payerMobNo" placeholder="Enter Your Mobile No"
    value={this.payerMobNo}
    onChange={e => this.setState({ payerMobNo: e.target.value })} /><br></br><br></br>
    <h3>MSC5/MSC2 Reiept Details (Optional)</h3><br></br>
    <label>MSC5/MSC2 Reciept No.</label>
    <input type="text" id="msRecieptNo" name="msRecieptNo" placeholder="Enter MSC5/MSC2 Reciept No."
    value={this.msRecieptNo}
    onChange={e => this.setState({ msRecieptNo: e.target.value })} /><br></br>
    <label>MSC5/MSC2 Reciept Issue Date</label>
    <input type="date" id="msIssueDate" name="msIssueDate" placeholder="Enter MSC5/MSC2 Issue Date."
    value={this.msIssueDate}
    onChange={e => this.setState({ msIssueDate: e.target.value })} />
    <br></br><br></br>
    <button type="button" onClick={this.gr}>Generate Reciept</button>
    </form>
    
    

            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return{
      user:state.user,
      password:state.password,
      auth_token:state.auth_token
    }
  }
export default connect(mapStateToProps)(Payment)