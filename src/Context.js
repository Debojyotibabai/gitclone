import React, { createContext, useState, useEffect } from "react";

// axios
import axios from "axios";

// context
export const SearchValue = createContext();
export const UserName = createContext();
export const UserData = createContext();
export const UserStar = createContext();
export const UserRepo = createContext();

// context provider
export const ContextProvider = (props) => {
  // global values
  const [searchValue, setSearchValue] = useState("");
  const [userName, setUserName] = useState("Debojyotibabai");
  const [userData, setUserData] = useState();
  const [userStar, setUserStar] = useState();
  const [userRepo, setUserRepo] = useState();

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

  return (
    <SearchValue.Provider value={[searchValue, setSearchValue]}>
      <UserName.Provider value={[userName, setUserName]}>
        <UserData.Provider value={[userData, setUserData]}>
          <UserStar.Provider value={[userStar, setUserStar]}>
            <UserRepo.Provider value={[userRepo, setUserRepo]}>
              {props.children}
            </UserRepo.Provider>
          </UserStar.Provider>
        </UserData.Provider>
      </UserName.Provider>
    </SearchValue.Provider>
  );
};
