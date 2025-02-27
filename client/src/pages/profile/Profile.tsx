import Layout from "../../components/layout/Layout";

export default function Settings() {
  return (
    <Layout>
      <>
        <div className="mb-3">
          <h4 className="fw-bolder p-2">Ilya, 20</h4>
          <div className="d-flex flex-row mb-3">
            <div className="p-2">
              <img
                className="rounded"
                src="https://via.placeholder.com/300"
                alt=""
              />
            </div>
            <div className="p-2">
              <h5 className="">Information</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>

        <form className="py-2">
          <div className="row mb-3">
            <label htmlFor="firstName" className="form-label">
              <h5>City</h5>
            </label>
            <div className="col">
              <input
                type="text"
                id="firstName"
                className="form-control"
                defaultValue={"Wroclaw"}
              />
            </div>
            <div className="col">
              <button type="button" className="btn btn-outline-danger">
                Save
              </button>
            </div>
          </div>
        </form>

        <div>
          <h5>Hobbies</h5>
          <div className="d-flex flex-row mb-3">
            <p className="p-2 border rounded-pill">Swimming</p>
            <p className="p-2 ms-3 border rounded-pill">Reading</p>
          </div>
        </div>
      </>
    </Layout>
  );
}
