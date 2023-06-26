import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Utube = () => {
  const useremail = "harshmavani06@gmail.com";
  const history = useNavigate();

  const [title, setTitle] = useState("");
  const handelTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const [discription, setDiscription] = useState("");
  const handelDiscription = (e) => {
    setDiscription(e.target.value);
    console.log(discription);
  };
  const [ytlink, setYtlink] = useState("");
  const handelYtlink = (e) => {
    setYtlink(e.target.value);
    console.log(ytlink);
  };

  const videoUpload = async (e) => {
    console.log("function callled");
    e.preventDefault();

    const res = await fetch("http://localhost:5000/ytvideo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        owner: useremail,
        title: title,
        discription: discription,
        ytlink: ytlink,
        isYT: true,
        isPDF: false,
        like: 0,
        dislike: 0,
      }),
    });
    const data = res.json();
    if (res.status === 200) {
      history("/listpage");
    } else {
      alert("something went wrong");
    }
    console.log(data);
  };

  return (
    <div style={{ background: "linear-gradient(to right, #fde047, #fb923c)" }}>
      <div style={{ display: "flex", "flex-direction": "row" }}>
        <div style={{ flex: "1", "padding-top": "20px" }}>
          <div style={{ padding: "48px" }}>
            <div>
              <h1
                style={{
                  "font-size": "2.5rem",
                  "font-weight": "900",
                  "padding-left": "1rem",
                }}
              >
                Get your new{" "}
                <span style={{ "font-weight": "900", color: "#b91c1c" }}>
                  Income
                </span>{" "}
                source!!!
              </h1>
            </div>
            <div>
              <h3
                style={{
                  "font-size": "1.125rem",
                  "font-weight": "900",
                  "padding-left": "1rem",
                  "padding-top": "2rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </h3>
            </div>
            <div style={{ "padding-top": "75px" }}>
              <h1
                style={{
                  "font-size": "2.5rem",
                  "font-weight": "900",
                  "padding-left": "1rem",
                }}
              >
                Upload your valuable content Here and,
              </h1>
              <h1
                style={{
                  "font-size": "2.5rem",
                  "font-weight": "900",
                  padding: "1rem",
                }}
              >
                <span style={{ color: "#047857" }}>Earn Money</span> 🤑🤑.
              </h1>
              <hr style={{ border: "1px solid #000000" }} />
            </div>
          </div>
        </div>
        <div style={{ flex: "1", "padding-top": "1rem" }}>
          <div>
            <div
              style={{
                "justify-content": "center",
                "align-items": "center",
                display: "flex",
                "flex-direction": "column",
              }}
            >
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  backgroundColor: "#F97316",
                  border: "2px solid #6B7280",
                  borderRadius: "0.5rem",
                  height: "fit-content",
                  padding: "2rem",
                  marginTop: "2em",
                }}
              >
                <section>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "-55px",
                    }}
                  >
                    <form action="">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                        }}
                      >
                        {/*<label
                          style={{
                            color: "#000000",
                            fontWeight: "500",
                            marginLeft: "0px",
                            marginBottom: "-15px",
                            fontSize: "16px",
                          }}
                        >
                          Add Title of your content :
                        </label>
                        <input
                          onChange={handelTitle}
                          style={{
                            border: "2px solid #1F2937",
                            "border-radius": "0.5rem",
                            fontSize: "16px",
                            padding: "0.5rem",
                            height: "2.5rem",
                            width: "24rem",
                            marginBottom: "-35px",
                          }}
                          type="text"
                          id="title"
                          name="title"
                          placeholder="Add Title"
                        />*/}

                        <label
                          style={{
                            color: "#000000",
                            fontWeight: "500",
                            marginLeft: "0px",
                            marginBottom: "2px",
                            fontSize: "14px",
                          }}
                        >
                          Add Title of your content :
                        </label>
                        <textarea
                          onChange={handelTitle}
                          id="desc"
                          name="desc"
                          rows={1}
                          cols={30}
                          style={{
                            border: "1px solid #1F2937",
                            borderRadius: "0.5rem",
                            fontSize: "12px",
                            padding: "0.5rem",
                            width: "22rem",
                            marginBottom: "-35px",
                          }}
                          placeholder="Add Title"
                        />

                        <label
                          style={{
                            color: "#000000",
                            fontWeight: "500",
                            marginLeft: "0px",
                            marginBottom: "2px",
                            fontSize: "14px",
                          }}
                        >
                          Description :
                        </label>
                        <textarea
                          onChange={handelDiscription}
                          id="desc"
                          name="desc"
                          rows={4}
                          cols={30}
                          style={{
                            border: "1px solid #1F2937",
                            borderRadius: "0.5rem",
                            fontSize: "12px",
                            padding: "0.5rem",
                            width: "22rem",
                            marginBottom: "-35px",
                          }}
                          placeholder="Add Description"
                        />

                        <label
                          style={{
                            color: "#000000",
                            fontWeight: "500",
                            marginLeft: "0px",
                            marginBottom: "2px",
                            fontSize: "14px",
                          }}
                        >
                          Add Tags :
                        </label>
                        <textarea
                          id="tags"
                          name="tags"
                          rows={2}
                          cols={30}
                          style={{
                            border: "1px solid #1F2937",
                            borderRadius: "0.75rem",
                            fontSize: "12px",
                            padding: "0.5rem",
                            width: "22rem",
                          }}
                          placeholder="Add Tags"
                        />

                        <label
                          style={{
                            color: "#000000",
                            fontWeight: "500",
                            marginLeft: "0px",
                            marginBottom: "2px",
                            fontSize: "14px",
                            marginTop: "25px",
                          }}
                        >
                          Add YouTube Link :
                        </label>
                        <textarea
                          onChange={handelYtlink}
                          id="tags"
                          name="tags"
                          rows={1}
                          cols={30}
                          style={{
                            border: "1px solid #1F2937",
                            borderRadius: "0.75rem",
                            fontSize: "12px",
                            padding: "0.5rem",
                            width: "22rem",
                          }}
                          placeholder="Add YouTube Link"
                        />
                      </div>

                      <div
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <input
                          type="submit"
                          id="submit"
                          name="submit"
                          onClick={videoUpload}
                          style={{
                            backgroundColor: "yellow",
                            fontSize: "14px",
                            borderRadius: "0.375rem",
                            marginTop: "2rem",
                            cursor: "pointer",
                            height: "fit-content",
                            width: "22rem",
                            padding: "10px",
                          }}
                        />
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utube;
