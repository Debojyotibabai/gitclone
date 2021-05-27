import React, { createContext, useState, useEffect } from "react";

// axios
import axios from "axios";

// context
export const SearchValue = createContext();
export const UserName = createContext();
export const UserData = createContext();
export const UserStar = createContext();
export const UserRepo = createContext();
export const UserRepoName = createContext();
export const UserRepoDetails = createContext();
export const UserEvent = createContext();
export const UserFollowers = createContext();

// context provider
export const ContextProvider = (props) => {
  // global values
  const [searchValue, setSearchValue] = useState("");
  const [userName, setUserName] = useState("Debojyotibabai");
  const [userData, setUserData] = useState();
  const [userStar, setUserStar] = useState();
  const [userRepo, setUserRepo] = useState();
  const [userRepoName, setUserRepoName] = useState();
  const [userRepoDetails, setUserRepoDetails] = useState();
  const [userEvent, setUserEvent] = useState();
  const [userFollowers, setUserFollowers] = useState();

  // fetch user data
  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}`).then((response) => {
      setUserData(response.data);
    });
  }, [userName]);

  // fetch user star
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userName}/starred`)
      .then((response) => {
        setUserStar(response.data);
      });
  }, [userName]);

  // fetch user repo
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then((response) => {
        setUserRepo(response.data);
      });
  }, [userName]);

  // fetch user repo details
  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${userName}/${userRepoName}/contents`)
      .then((response) => {
        setUserRepoDetails(response.data);
      });
  }, [userName, userRepoName]);

  // fetch user event
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userName}/events`)
      .then((response) => {
        setUserEvent(response.data);
      });
  }, [userName]);

  // fetch user followers
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userName}/followers`)
      .then((response) => {
        setUserFollowers(response.data);
      });
  }, [userName]);

  return (
    <SearchValue.Provider value={[searchValue, setSearchValue]}>
      <UserName.Provider value={[userName, setUserName]}>
        <UserData.Provider value={[userData, setUserData]}>
          <UserStar.Provider value={[userStar, setUserStar]}>
            <UserRepo.Provider value={[userRepo, setUserRepo]}>
              <UserRepoName.Provider value={[userRepoName, setUserRepoName]}>
                <UserRepoDetails.Provider
                  value={[userRepoDetails, setUserRepoDetails]}
                >
                  <UserEvent.Provider value={[userEvent, setUserEvent]}>
                    <UserFollowers.Provider
                      value={[userFollowers, setUserFollowers]}
                    >
                      {props.children}
                    </UserFollowers.Provider>
                  </UserEvent.Provider>
                </UserRepoDetails.Provider>
              </UserRepoName.Provider>
            </UserRepo.Provider>
          </UserStar.Provider>
        </UserData.Provider>
      </UserName.Provider>
    </SearchValue.Provider>
  );
};
