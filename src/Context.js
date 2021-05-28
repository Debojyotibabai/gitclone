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
  const [userEvent, setUserEvent] = useState();
  const [userFollowers, setUserFollowers] = useState();

  // set user name from local storage
  useEffect(() => {
    setUserName(localStorage.getItem("userName") || userName);
  }, [userName]);

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
              <UserEvent.Provider value={[userEvent, setUserEvent]}>
                <UserFollowers.Provider
                  value={[userFollowers, setUserFollowers]}
                >
                  {props.children}
                </UserFollowers.Provider>
              </UserEvent.Provider>
            </UserRepo.Provider>
          </UserStar.Provider>
        </UserData.Provider>
      </UserName.Provider>
    </SearchValue.Provider>
  );
};
