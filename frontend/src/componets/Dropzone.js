import React, { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDropzone } from "react-dropzone";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { XMarkIcon } from "@heroicons/react/24/solid";

const DropZone = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      console.log(acceptedFiles);
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);

  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": ["pdf"],
    },
    maxFiles: 3,
    maxSize: 1000 * 1024,
  });

  return (
    <div
      style={{
        background: "linear-gradient(to right, #fde047, #fb923c)",
      }}
    >
      <div style={{ display: "flex", "flex-direction": "row" }}>
        <div style={{ flex: "1", "padding-top": "30px" }}>
          <div style={{ padding: "48px" }}>
            <div>
              <h1
                style={{
                  "font-size": "3rem",
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
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </h3>
            </div>
            <div style={{ "padding-top": "75px" }}>
              <h1
                style={{
                  "font-size": "3rem",
                  "font-weight": "900",
                  "padding-left": "1rem",
                }}
              >
                Upload your valuable content Here and,
              </h1>
              <h1
                style={{
                  "font-size": "3rem",
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
        <div style={{ flex: "1", "padding-top": "3.5rem" }}>
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
                  gap: "1rem",
                  height: "fit-content",
                  padding: "2rem",
                  marginTop: "3rem",
                }}
              >
                <section style={{ marginTop: "0.5rem" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <form action="">
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <label
                          style={{
                            color: "#000000",
                            fontWeight: "500",
                            paddingBottom: "0.5rem",
                            fontSize: "1rem",
                          }}
                        >
                          Add Title of your content :
                        </label>
                        <input
                          style={{
                            border: "1px solid #1F2937",
                            "border-radius": "0.75rem",
                            fontSize: "1rem",
                            padding: "0.5rem",
                            width: "24rem",
                          }}
                          type="text"
                          id="title"
                          name="title"
                          placeholder="Add Title"
                        />

                        <label
                          style={{
                            "padding-top": "0.5rem",
                            fontWeight: "500",
                            paddingBottom: "0.5rem",
                            fontSize: "1rem",
                          }}
                        >
                          Description :
                        </label>
                        <textarea
                          id="desc"
                          name="desc"
                          rows={4}
                          cols={30}
                          style={{
                            border: "1px solid #1F2937",
                            borderRadius: "0.75rem",
                            fontSize: "1rem",
                            padding: "0.5rem",
                            width: "24rem",
                          }}
                          placeholder="Add Description"
                        />

                        <label
                          style={{
                            paddingTop: "0.5rem",
                            fontWeight: "500",
                            paddingBottom: "0.5rem",
                            fontSize: "1rem",
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
                            fontSize: "1rem",
                            padding: "0.5rem",
                            width: "24rem",
                          }}
                          placeholder="Add Tags"
                        />
                        {/*<label className="pt-2 font-medium pb-2 text-base">
                        Add YouTube link :
                      </label>
                      <input
                      type="text"
                        id="YTlink"
                        name="YTlink"
                        className="border border-slate-950 rounded-xl text-base p-2 w-96"
                        placeholder="Add YouTube link"
                      />*/}
                      </div>

                      <div
                        style={{
                          justifyContent: "center",
                          marginTop: "2rem",
                          alignItems: "center",
                          display: "flex",
                          flexDirection: "column",
                          border: "1px dashed #B0BAC9",
                          borderRadius: "0.75rem",
                          padding: "0.5rem",
                          backgroundColor: "#FDE047",
                        }}
                      >
                        <div
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "column",
                            cursor: "pointer",
                            width: "20rem",
                          }}
                          {...getRootProps({})}
                        >
                          <h1
                            style={{
                              fontSize: "1.125rem",
                              fontWeight: "700",
                              margin: "0.75rem",
                            }}
                          >
                            Upload PDF Files
                          </h1>

                          <FontAwesomeIcon
                            style={{ height: "2.75rem" }}
                            icon={faFileUpload}
                          />
                          <input {...getInputProps()} />
                          {isDragActive ? (
                            <p
                              style={{
                                margin: "0.25rem",
                                fontSize: "1rem",
                                width: "24rem",
                                padding: "0.5rem",
                              }}
                            >
                              Drop the files here ...
                            </p>
                          ) : (
                            <p
                              style={{
                                margin: "0.25rem",
                                fontSize: "1rem",
                                width: "24rem",
                                padding: "0.5rem",
                              }}
                            >
                              Drag & drop some files here, or click to select
                              files
                            </p>
                          )}
                        </div>
                      </div>

                      <section style={{ marginTop: "2.5rem" }}>
                        <h3
                          style={{
                            fontSize: "1rem",
                            fontWeight: "600",
                            color: "#1F2937",
                            marginTop: "0.5rem",
                            borderBottom: "1px solid #1F2937",
                            paddingBottom: "0.75rem",
                          }}
                        >
                          Accepted Files
                        </h3>
                        <ul
                          style={{
                            marginTop: "2rem",
                            display: "grid",
                            gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                            gridGap: "2.5rem",

                            "@media (min-width: 640px)": {
                              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                            },

                            "@media (min-width: 768px)": {
                              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                            },

                            "@media (min-width: 1024px)": {
                              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                            },

                            "@media (min-width: 1280px)": {
                              gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                            },
                          }}
                        >
                          {files.map((file) => (
                            <li
                              key={file.name}
                              style={{
                                position: "relative",
                                height: "1.5rem",
                                borderRadius: "0.375rem",
                                color: "#1F2937",
                                fontSize: "0.875rem",
                              }}
                            >
                              <button
                                type="button"
                                style={{
                                  border: "1px solid #CBD5E0",
                                  borderRadius: "9999px",
                                  display: "flex",

                                  justifyContent: "center",
                                  alignItems: "center",
                                  position: "absolute",
                                  top: "0",
                                  right: "0",
                                  transitionProperty: "background-color",
                                  transitionDuration: "0.2s",
                                }}
                                onClick={() => removeFile(file.name)}
                              >
                                <XMarkIcon
                                  style={{
                                    width: "1.25rem",
                                    height: "1.25rem",
                                    transitionProperty: "colors",
                                  }}
                                />
                              </button>
                              <p
                                style={{
                                  marginTop: "0.25rem",
                                  color: "#6B7280",
                                  fontSize: "12px",
                                  fontWeight: "500",
                                }}
                              >
                                {file.name}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </section>
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
                          style={{
                            backgroundColor: "yellow",
                            fontSize: "1rem",
                            padding: "0.5rem",
                            borderRadius: "0.375rem",
                            marginTop: "2rem",
                            cursor: "pointer",
                            width: "24rem",
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

export default DropZone;
