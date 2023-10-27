import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const service = useLoaderData();
   const {title} = service;
    return (
        <div>
            <h2>book service :{title}</h2>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />

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