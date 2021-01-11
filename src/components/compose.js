import React from "react";
import Sidebar from "./sidebar";

const Compose = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7">
            <h1>Compose</h1>
            <form className="form">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="postTitle"
                  id="title"
                  value=""
                  className="form-control"
                />

                <label htmlFor="textInput">Post</label>
                <textarea
                  name="postBody"
                  id="textInput"
                  className="form-control"
                  rows="8"
                  cols="80"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-lg btn-primary">
                Publish
              </button>
            </form>
          </div>

          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Compose;
