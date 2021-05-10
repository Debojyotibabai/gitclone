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
import { UserName, UserData, UserStar, UserRepo, UserEvents } from "../Context";

// github contribution calender
import GitHubCalendar from "react-github-calendar";

// tooltip
import ReactTooltip from "react-tooltip";

const Overview = () => {
  // global values
  const [userName] = useContext(UserName);
  const [userData] = useContext(UserData);
  const [userStar] = useContext(UserStar);
  const [userRepo] = useContext(UserRepo);
  const [userEvents] = useContext(UserEvents);

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
                    fontSize: "1.4rem",
                    marginTop: "20px",
                    color: "#1089ff",
                  }}
                >
                  {userStar == null ? "wait" : userStar.length}
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
                    marginTop: "55px",
                    fontSize: "1rem",
                    fontWeight: "normal",
                    letterSpacing: "0px",
                  }}
                >
                  Loading...
                </h1>
              ) : (
                <div className="repo">
                  {userRepo.length !== 0 ? (
                    userRepo.slice(0, 4).map((repo, repoIndex) => {
                      return (
                        <PopularRepoCard
                          key={repoIndex}
                          name={repo.name}
                          description={repo.description}
                          star={repo.stargazers_count}
                          fork={repo.forks_count}
                        />
                      );
                    })
                  ) : (
                    <h1
                      style={{
                        fontSize: "1rem",
                        fontWeight: "normal",
                        letterSpacing: "0px",
                      }}
                    >
                      No repositories available.
                    </h1>
                  )}
                </div>
              )}
            </div>

            {/* contribution chart */}
            <div className="contribution__chart">
              <h1>CONTRIBUTIONS</h1>
              <div className="chart">
                <GitHubCalendar username={userName} color="hsl(210, 100%, 53%)">
                  <ReactTooltip delayShow={50} html />
                </GitHubCalendar>
              </div>
            </div>

            {/* recent activity */}
            <div className="recent__activity">
              <h1>Recent Push Events</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
