import React, { useContext } from "react";

// component
import SideProfile from "./SideProfile";
import SearchBar from "./SearchBar";
import PopularRepoCard from "./PopularRepoCard";

// css
import "../App.css";
import "../Css/SideProfile.css";
import "../Css/Overview.css";

// context
import { UserData, UserStar, UserRepo } from "../Context";

const Overview = () => {
  // global values
  const [userData] = useContext(UserData);
  const [userStar] = useContext(UserStar);
  const [userRepo] = useContext(UserRepo);

  return (
    // right section
    <div className="right__section">
      {/* check user data and set side profile */}
      {userData == null ? (
        <h1
          className="side__profile"
          style={{ textAlign: "center", fontSize: "1.5rem" }}
        >
          Loading...
        </h1>
      ) : (
        <SideProfile
          img={userData.avatar_url}
          name={userData.name}
          userName={userData.login}
          bio={userData.bio}
          githubLink={userData.html_url}
          twitterUserName={userData.twitter_username}
          address={userData.location}
        />
      )}

      {/* right section details */}
      <div className="right__section__details">
        {/* search bar */}
        <SearchBar />

        {/* check global values and set users activity */}
        {userData == null ? (
          <h1
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "80vh",
              fontSize: "1.8rem",
            }}
          >
            Loading...
          </h1>
        ) : (
          // users activity
          <div className="user__activity">
            <p>
              Profile is created at: <span>{userData.created_at}</span>
            </p>

            {/* activity */}
            <div className="activity">
              <h1>
                Repositories <span>{userData.public_repos}</span>
              </h1>
              <h1>
                Stars{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                    marginTop: "20px",
                    color: "#1089ff",
                  }}
                >
                  {userStar == null ? "wait..." : userStar.length}
                </span>
              </h1>
              <h1>
                Followers <span>{userData.followers}</span>
              </h1>
              <h1>
                Following <span>{userData.following}</span>
              </h1>
            </div>

            {/* porpular repo */}
            <div className="popular__repo">
              <h1>POPULAR REPOSITORIES</h1>

              {userRepo == null ? (
                <h1
                  style={{
                    marginTop: "60px",
                    color: "#1089ff",
                    fontSize: "1.2rem",
                  }}
                >
                  Wait...
                </h1>
              ) : (
                <div className="repo">
                  {userRepo.slice(0, 4).map((repo, repoIndex) => {
                    return (
                      <PopularRepoCard
                        key={repoIndex}
                        name={repo.name}
                        description={repo.description}
                        star={repo.stargazers_count}
                        fork={repo.forks_count}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
