import styled from "styled-components";
import { colors } from "../../variables";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  width: 100vw;
  height: 100vh;
  min-width: 400px;
  font-family: "ibm-plex-sans", sans-serif;

  .lms_name {
    position: sticky;
    font-weight: 700;
    width: 250px;
    height: 778px;
    left: 530px;
    font-size: 20px;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    background: #eff1f3;
    align-items: center;

    .logo-responsive {
      position: absolute;
    }
    .logo__neovia {
      position: absolute;
      width: 100%;
      left: 50%;
      transform: translate(-50%, 0);
      align-items: center;
      top: -100px;
      @media (max-width: 1024px) {
        width: 80%;
      }
    }

    .logo-container {
      position: relative;
      top: -150px;
      z-index: 9000;

      @media (max-width: 1024px) {
        padding: 20px 0;
      }
    }

    form {
      z-index: 1;
      display: flex;
      flex-direction: column;
      position: relative;
      width: 288px;
      top: 272px;
      height: 300px;
      background: rgba(234, 234, 234, 0.95);
      padding: 6px 14px;
      border-radius: 8px;

      input {
        font-family: "IBM Plex Sans";
        font-weight: 400;
        font-size: 14px;
        margin-top: 4px;
        ::-ms-reveal {
          display: none;
        }
      }

      span {
        font-family: "IBM Plex Sans", sans-serif;
        font-size: 12px;
      }

      .form__button-container {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;

        .form__confirm-btn {
          font-family: "IBM Plex Sans", sans-serif;
          font-weight: 700;
          text-transform: none;
          font-size: 14px;
          padding: 4px;
          gap: 4px;
          line-height: 1.6;
          border: none;
          height: 40px;
          width: 275px;
          border-radius: 8px;
          color: white;
          transition: all 0.3s ease;
          cursor: pointer;
          &:hover {
            box-shadow: none;
          }
          &:disabled {
            color: white;
          }

          > span {
            margin-left: 5px;
            color: white;
          }
        }
      }
      .form__esqueci-senha {
        font-family: "IBM Plex Sans", sans-serif;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        display: grid;
        font-size: 14px;
        padding: 14px 10px;
        text-align: left;
        text-decoration-line: underline;
        cursor: pointer;
      }
      .form__subscribe {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        font-style: normal;
        line-height: 60%;
        text-align: center;
        border: 1px solid #cbd6e2;
        flex: none;
        order: 0;
        flex-grow: 1;
      }

      p {
        width: 252px;
        font-family: "IBM Plex Sans", sans-serif;
        font-style: normal;
        font-size: 12px;
        line-height: 150%;
        text-align: center;
      }
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: unset;
    background: #eff1f3;
    height: auto;

    .form-container {
      form {
        position: unset;
        height: 430px;
        width: 315px;
        align-content: space-between;
        top: 0px;
        padding: 165px 5px;
        background: none;
        .form__esqueci-senha {
          padding: 14px 20px;
        }
      }
      .logo-responsive {
        position: relative;
        display: flex;
        flex-direction: column;
        top: 0px;

        input {
          font-weight: 400;
          font-size: 14px;
          box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);
        }
      }

      .logo-container {
        position: relative;
        padding-left: 100px;
        top: 0px;
      }

      .logo__neovia {
        position: absolute;
        height: 70px;

        top: 73px;
      }
    }
  }
`;

export const Whitebg = styled.div`
  font-family: "ibm-plex-sans", sans-serif;
  background: white;
  min-height: 100vh;
  min-width: 390px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;

  position: relative;

  .banner__lms {
    position: absolute;
    width: 360px;
    top: 10%;
  }

  @media (min-width: 1024px) {
    height: 100vh;

    .banner__lms {
      position: absolute;
      width: 498px;
      height: 80%;
      left: 50%;
      transform: translate(-50%, 0);
      align-items: center;
    }

    .lms_name {
      position: absolute;
      font-weight: 700;
      width: 280px;
      height: 48px;
      left: 510px;
      top: 56px;
      font-size: 26px;
    }
  }
`;

export const InputWrapper = styled.label`
  width: 100%;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 8px;
  font-size: 14px;
  line-height: 18px;
  font-family: "IBM Plex Sans", sans-serif;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  input {
    font-weight: 400;
    background-color: var(--white);
    width: 100%;
    padding: 8px 12px 8px 12px;
    margin: 8px 0;
    border-radius: 6px;
    display: inline-block;
    border: 1px solid ${colors.PROTOTYPE_BLACK20};
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);
  }
  @media (min-width: 1024px) {
    input {
      width: 90%;
    }
  }
  span {
    font-size: 12px;
    color: var(--red);
    align-self: flex-start;
    padding: 3px 0;
  }
  .form__show-password-btn {
    position: absolute;
    left: 68%;
    font-size: 10px;
    margin-top: 19px;
    color: ${colors.PROTOTYPE_GRAY500};
    line-height: 13px;
    font-weight: 700;
    border: 0;
    padding: 0px;
    background: none;
    cursor: pointer;
  }
`;

export const Whitebackground = styled.div`
  background: white;
  height: 100%;
  min-width: 390px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;

  position: relative;

  .banner__lms {
    position: absolute;
    width: 328px;
    height: 326.03px;
    left: calc(50% - 328px / 2);
    top: 46px;
  }

  @media (min-width: 1024px) {
    height: 100vh;

    .banner__lms {
      position: absolute;
      width: 498px;
      height: 80%;
      left: 50%;
      transform: translate(-50%, 0);
      align-items: center;
    }
    .lms_name {
      position: absolute;
      font-weight: 700;
      width: 280px;
      height: 48px;
      left: 510px;
      top: 71px;
      font-size: 26px;
    }
  }
`;
