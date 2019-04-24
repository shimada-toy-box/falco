import styled from 'styled-components';

const Style = {
  Container: styled.div`
    border: 3px solid #212934;
    border-radius: 8px;
    width: 330px;
    margin-bottom: 30px;
  `,
  ProjectScreenshot: styled.img`
    width: 100%;
  `,
  ProjectTitle: styled.h2`
    color: #6175de;
    text-align: center;
    font-size: 20px;
    margin: 10px auto;
  `,
  LastAudit: styled.p`
    color: #6e7a8b;
    font-size: 16px;
    text-align: center;
    font-family: 'IBM Plex Mono', Sans-Serif;
    margin: 0 auto 10px;
  `,
  PagesWrapper: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `,
  Page: styled.h4`
    color: #212934;
    font-size: 16px;
    margin-bottom: 0;
    margin-top: 5px;
    flex-basis: 40%;
    text-align: left;
    padding-left: 20px;
    font-family: 'IBM Plex Mono', Sans-Serif;
  `,
  LinkWrapper: styled.div`
    text-align: center;
    margin: 20px auto;
  `,
  PrimaryButton: styled.button`
    cursor: pointer;
    border-radius: 4px;
    height: 50px;
    background: #6175de;
    color: #e1e7eb;
    font-size: 16px;
    font-family: 'IBM Plex Sans', Sans-Serif;
    font-weight: 700;
    padding: 0 20px;
  `,
};

export default Style;
