import React, { useContext } from "react";

// context
import { UserData, UserRepo } from "../Context";

// component
import SideProfile from "./SideProfile";
import SearchBar from "./SearchBar";
import RepositoriesCard from "./RepositoriesCard";

// css
import "../App.css";
import "../Css/SideProfile.css";
import "../Css/Repositories.css";

// loader
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Repositories = () => {
  // global values
  const [userData] = useContext(UserData);
  const [userRepo] = useContext(UserRepo);

  return (
    // right section
    <div className="right__section">
      {/* check user data and set side profile */}
      {userData == null ? (
        <Loader
          className="side__profile"
          style={{ textAlign: "center" }}
          type="Oval"
          color="#0366d6"
          height={30}
          width={30}
        />
      ) : (
        <SideProfile />
      )}

      {/* right section details */}
      <div className="right__section__details">
        {/* search bar */}
        <SearchBar />

        {/* user main section */}
        <div className="user__main__section">
          {/* repositories section */}
          <div className="repositories__section">
            <h1>REPOSITORIES</h1>
            {userData == null ? (
              <p>
                Wait a minute
                <Loader
                  style={{ marginLeft: "10px" }}
                  type="ThreeDots"
                  color="#0366d6"
                  height={20}
                  width={20}
                />
              </p>
            ) : userData.public_repos <= 30 ? (
              <p>
                <span>{userData.public_repos}</span>repositories has been
                created till now.
              </p>
            ) : (
              <p>
                <span>{userData.public_repos}</span>repositories has been
                created till now. Some of these are :
              </p>
            )}

            {userRepo == null ? (
              <Loader
                style={{ textAlign: "center" }}
                type="Oval"
                color="#0366d6"
                height={30}
                width={30}
              />
            ) : (
              // repositories
              <div className="repositories">
                {userRepo.length === 0 ? (
                  <h1
                    style={{
                      fontSize: "1.01rem",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    No repositories available here.
                  </h1>
                ) : (
                  userRepo.map((eachRepo, eachRepoIndex) => {
                    return (
                      <RepositoriesCard
                        key={eachRepoIndex}
                        name={eachRepo.name}
                        branch={
                          eachRepo.default_branch == null
                            ? null
                            : eachRepo.default_branch
                        }
                        description={eachRepo.description}
                        language={eachRepo.language}
                        star={eachRepo.stargazers_count}
                        fork={eachRepo.forks_count}
                        license={
                          eachRepo.license == null
                            ? "No license"
                            : eachRepo.license.name
                        }
                        date={eachRepo.updated_at}
                      />
                    );
                  })
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
