import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData();
   const {title,price,_id,img} = service;
   const{user}= useContext(AuthContext);
   const handleCheckOut= event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const order ={
        customerName: name,
        email,
        img,
        date,
        service:title,
        service_id: _id,
        price: price

    }
    console.log(order)
     fetch('http://localhost:5000/bookings',{
        method: "POST",
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(order)
     })
     .then(res => res.json())
     .then(data => {
        console.log(data);
        if(data.insertedId){
            alert('service book successfully')
        }
     })
   }
    return (
        <div>
            <h2 className="text-center text-3xl">Book Service :{title}</h2>
            <div className="hero bg-base-200">
          
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <form onSubmit={handleCheckOut} className="card-body">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" defaultValue={"$"+price} className="input input-bordered" required />

        </div>
       </div>
        <div className="form-control mt-6">
        <input className="btn btn-primary" type="submit" value="Order Confirm" />
       
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default CheckOut;