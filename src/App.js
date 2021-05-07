import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Cooking from './components/Cooking.jsx';
import Profile from './components/Profile.jsx';
import Recreational from './components/Recreational.jsx';
import Settings from './components/Settings.jsx';
import Welcome from './components/Welcome.jsx';

export const PROFILE_VIEW = 'Profile';
export const SETTINGS_VIEW = 'Settings';
export const COOKING_VIEW = 'Cooking';
export const RECREATIONAL_VIEW = 'Recreational';
export const WELCOME_VIEW = 'Welcome';

const viewsMap = {
  [PROFILE_VIEW]: Profile,
  [SETTINGS_VIEW]: Settings,
  [COOKING_VIEW]: Cooking,
  [RECREATIONAL_VIEW]: Recreational,
  [WELCOME_VIEW]: Welcome
}

const AppContainer = styled.div`
  display: flex;
`;

const AccordionMenu = styled.ul`
  width: 30%;
  padding-left: 0;
  margin: 0;
`;

const AccordionMenuItem = styled.li`
  background-color: #928e8e;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
  box-sizing: border-box;
`;

const AccordionMenuSubItem = styled(AccordionMenuItem)`
  background-color: #dadada;
  font-size: 13px;
`;

const PageContentTitle = styled.h2`
  text-align: center;
  margin: 0;
`;

const PageContent = styled.div`
  width: 70%;
  padding: 10px;
`;

function App() {
  const [ isAccountOpen, toggleAccountStatus ] = useState(false);
  const [ isActivitiesOpen, toggleActivitiesStatus ] = useState(false);
  const [ pageView, setPageView ] = useState(WELCOME_VIEW);
  const [ userData, setUserData ] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  
  const toggleAccountView = useCallback(() => {
    toggleAccountStatus(!isAccountOpen)
  }, [isAccountOpen]);
  
  const toggleActivitiesView = useCallback(() => {
    toggleActivitiesStatus(!isActivitiesOpen)
  }, [isActivitiesOpen]);
  
  const setPageContentView = useCallback((e) => {
    /*
      Despite e.target.value and e.target.innerHTML has the same values
      I decided to have value attribute in <li /> tags to store view name 
      as it is more reliable than innerHTML
    */
   const ViewTitle = e.target.getAttribute("value");
   setPageView(ViewTitle);
  }, []);
  
  const CurrentPageView = viewsMap[pageView];

  return (
      <AppContainer>
          <AccordionMenu>
              <AccordionMenuItem
                  data-testid="account-menu-item"
                  tabIndex="0"
                  onClick={toggleAccountView}>Account</AccordionMenuItem>
              {isAccountOpen &&
                  <>
                      <AccordionMenuSubItem
                          data-testid="profile-menu-subitem"
                          tabIndex="1"
                          value={PROFILE_VIEW}
                          onClick={setPageContentView}>{PROFILE_VIEW}</AccordionMenuSubItem>
                      <AccordionMenuSubItem
                          data-testid="settings-menu-subitem"
                          tabIndex="2"
                          value={SETTINGS_VIEW}
                          onClick={setPageContentView}>{SETTINGS_VIEW}</AccordionMenuSubItem>
                  </>}
              <AccordionMenuItem
                  data-testid="activities-menu-item"
                  tabIndex="3"
                  onClick={toggleActivitiesView}>Activities</AccordionMenuItem>
              {isActivitiesOpen &&
                  <>
                      <AccordionMenuSubItem
                          data-testid="recreational-menu-subitem"
                          tabIndex="4"
                          value={RECREATIONAL_VIEW}
                          onClick={setPageContentView}>{RECREATIONAL_VIEW}</AccordionMenuSubItem>
                      <AccordionMenuSubItem
                          data-testid="cooking-menu-subitem"
                          tabIndex="5"
                          value={COOKING_VIEW}
                          onClick={setPageContentView}>{COOKING_VIEW}</AccordionMenuSubItem>
                  </>}
        </AccordionMenu>
        <PageContent>
            {pageView &&
              <>
                <PageContentTitle>{pageView}</PageContentTitle>
                <CurrentPageView userData={userData} setUserData={setUserData} />
              </>}
        </PageContent>
    </AppContainer>
  );
}

export default App;
