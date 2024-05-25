import logo from "./logo.svg";
import "./App.css";
import topImage from "../src/Assets/topImage.jpg"
import roundImage from "../src/Assets/roundImage.png"
import NavigateBackChevron from "../src/Assets/NavigateBackChevron.png"

function App() {
  return (
    <div className="App">
      <div
        className="Store"
        style={{
          width: 390,
          height: 844,
          position: "relative",
          background: "white",
          borderRadius: 25,
          overflow: "hidden",
        }}
      >
        <div
          className="Frame1221"
          style={{
            width: 390,
            height: 220,
            left: 0,
            top: 0,
            position: "absolute",
            borderRadius: 5,
            overflow: "hidden",
          }}
        >
          <img
            className="Rectangle520"
            style={{
              width: 440,
              height: 315,
              left: -25,
              top: 0,
              position: "absolute",
            }}
            src={topImage}
          />
          <div
            className="StatusBar"
            style={{
              width: 390,
              height: 40,
              paddingTop: 14.18,
              paddingBottom: 6.18,
              paddingLeft: 35.61,
              paddingRight: 25.71,
              left: 0,
              top: 0,
              position: "absolute",
              justifyContent: "flex-end",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="BarsStatusBarIphoneLight"
              style={{ width: 328.68, height: 19.64, position: "relative" }}
            >
              <div
                className="Battery"
                style={{
                  width: 26.12,
                  height: 11.27,
                  left: 302.56,
                  top: 5.27,
                  position: "absolute",
                }}
              >
                <div
                  className="Border"
                  style={{
                    width: 23.02,
                    height: 11.27,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    opacity: 0.35,
                    border: "1.09px white solid",
                  }}
                ></div>
                <div
                  className="Cap"
                  style={{
                    width: 1.46,
                    height: 4.36,
                    left: 24.66,
                    top: 3.45,
                    position: "absolute",
                    opacity: 0.4,
                    background: "white",
                  }}
                ></div>
                <div
                  className="Capacity"
                  style={{
                    width: 19.73,
                    height: 8,
                    left: 1.64,
                    top: 1.64,
                    position: "absolute",
                    background: "white",
                  }}
                ></div>
              </div>
              <div
                className="Wifi"
                style={{
                  width: 16.81,
                  height: 12,
                  left: 279.73,
                  top: 4.72,
                  position: "absolute",
                  background: "white",
                }}
              ></div>
              <div
                className="CellularConnection"
                style={{
                  width: 18.63,
                  height: 11.64,
                  left: 255.62,
                  top: 5.09,
                  position: "absolute",
                  background: "white",
                }}
              ></div>
              <div
                className="41"
                style={{
                  width: 31.78,
                  height: 19.64,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  color: "white",
                  fontSize: 16.39,
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                9:41
              </div>
            </div>
          </div>
          <div
            className="Rectangle672"
            style={{
              width: 479,
              height: 122,
              left: -45,
              top: 171,
              position: "absolute",
              background: "white",
              boxShadow:
                "52.79999923706055px 52.79999923706055px 52.79999923706055px ",
              filter: "blur(12.80px)",
            }}
          />
        </div>
        <div
          className="ProfilePicture"
          style={{
            width: 100,
            height: 100,
            left: 20,
            top: 170,
            position: "absolute",
          }}
        >
          <div
            className="Ellipse696"
            style={{
              width: 94,
              height: 94,
              left: 3,
              top: 3,
              position: "absolute",
              background: "white",
              borderRadius: 9999,
            }}
          />
          <img
            className="Ellipse697"
            style={{
              width: 88,
              height: 88,
              left: 6,
              top: 6,
              position: "absolute",
              borderRadius: 9999,
            }}
            src={roundImage}
          />
        </div>
        <div
          className="Starchild20ByKrissannBarretto"
          style={{
            width: 222,
            left: 23,
            top: 286,
            position: "absolute",
            color: "#592EBF",
            fontSize: 15,
            fontFamily: "Domaine Display",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          Starchild 2.0 by Krissann Barretto
        </div>
        <div
          className="DigitalCreator"
          style={{
            left: 23,
            top: 308,
            position: "absolute",
            textAlign: "center",
            color: "#4971FD",
            fontSize: 11,
            fontFamily: "Sharp Grotesk",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Digital Creator
        </div>
        <div
          className="Frame767"
          style={{
            width: 240,
            height: 62,
            left: 134,
            top: 202,
            position: "absolute",
          }}
        >
          <div
            className="Frame599"
            style={{
              height: 36,
              left: 18,
              top: 7,
              position: "absolute",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 5,
              display: "inline-flex",
            }}
          >
            <div
              className="Frame1220"
              style={{
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
                display: "inline-flex",
              }}
            >
              <div
                className="InstagramIcon"
                style={{
                  width: 20,
                  height: 20,
                  background: "#AB1AA1",
                  border: "0.15px solid",
                }}
              ></div>
              <div
                className="M"
                style={{
                  textAlign: "center",
                  color: "#AB1AA1",
                  fontSize: 23,
                  fontFamily: "Domaine Display",
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                1M
              </div>
            </div>
            <div
              className="Followers"
              style={{
                textAlign: "center",
                color: "#8C8C8C",
                fontSize: 11,
                fontFamily: "Sharp Grotesk",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              followers
            </div>
          </div>
          <div
            className="Frame598"
            style={{
              left: 146,
              top: 7,
              position: "absolute",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 9,
              display: "inline-flex",
            }}
          >
            <div
              className="Frame1220"
              style={{
                justifyContent: "center",
                alignItems: "center",
                gap: 6,
                display: "inline-flex",
              }}
            >
              <div
                className="YoutubeIcon"
                style={{ width: 20, height: 14.2, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 20,
                    height: 14.2,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    border: "1.93px #FF487F solid",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 5.42,
                    height: 6.2,
                    left: 8.04,
                    top: 3.9,
                    position: "absolute",
                    background: "#FF487F",
                  }}
                ></div>
              </div>
              <div
                className="K"
                style={{
                  textAlign: "center",
                  color: "#FF487F",
                  fontSize: 23,
                  fontFamily: "Domaine Display",
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                220K
              </div>
            </div>
            <div
              className="Subscribers"
              style={{
                textAlign: "center",
                color: "#8C8C8C",
                fontSize: 11,
                fontFamily: "Sharp Grotesk",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Subscribers
            </div>
          </div>
          <div
            className="Line260"
            style={{
              width: 46,
              height: 0,
              left: 117,
              top: 9,
              position: "absolute",
              transform: "rotate(90deg)",
              transformOrigin: "0 0",
              background: "white",
              border: "0.50px #9E9D9D solid",
            }}
          ></div>
        </div>
        <div
          className="ProfileHeader"
          style={{
            width: 390,
            height: 57,
            left: 0,
            top: 39,
            position: "absolute",
            boxShadow: "0px 20px 24px rgba(0, 0, 0, 0.03)",
          }}
        >
          <div
            className="NavigateBackChevron"
            style={{
              width: 19.83,
              height: 19.83,
              left: 20,
              top: 18,
              position: "absolute",
            }}
          >
            <div
              className="Vector"
              style={{
                width: 14.02,
                height: 14.02,
                left: 9.91,
                top: 19.83,
                position: "absolute",
                transform: "rotate(-135deg)",
                transformOrigin: "0 0",
                border: "1.65px white solid",
              }}
            ></div>
          </div>
          <div
            className="Frame887"
            style={{
              left: 81,
              top: 20,
              position: "absolute",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              gap: 4,
              display: "inline-flex",
            }}
          >
            <div
              className="Starchild20ByKrissannbarretto"
              style={{
                width: 208,
                color: "white",
                fontSize: 15,
                fontFamily: "Sharp Grotesk",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              starchild2.0_by_krissannbarretto
            </div>
            <div
              className="VerifiedBadge"
              style={{ width: 16, height: 16, position: "relative" }}
            >
              <div
                className="Vector58"
                style={{
                  width: 5.33,
                  height: 3.2,
                  left: 5.34,
                  top: 6.4,
                  position: "absolute",
                  border: "1.28px white solid",
                }}
              ></div>
            </div>
          </div>
          <div
            className="WishlistIcon"
            style={{
              height: 32,
              paddingTop: 6,
              paddingBottom: 6,
              paddingLeft: 5,
              paddingRight: 7,
              left: 336,
              top: 13,
              position: "absolute",
              background: "white",
              borderRadius: 15.99,
              overflow: "hidden",
              backdropFilter: "blur(20px)",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Share"
              style={{
                width: 20,
                height: 20,
                position: "relative",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "flex",
              }}
            >
              <img
                className="Union"
                style={{ width: 15, height: 16.67 }}
                src="https://via.placeholder.com/15x17"
              />
            </div>
          </div>
        </div>
        <div
          className="EqualistAnimalLoverHappyChildSocialMediaKrissannTheplugmediaInTheplugmediaInActingInquiriesTeamkrissannGmailComTalentgramAgency"
          style={{
            width: 331,
            left: 23,
            top: 331,
            position: "absolute",
            color: "#1A3365",
            fontSize: 12,
            fontFamily: "Sharp Grotesk",
            fontWeight: "400",
            lineHeight: 13,
            wordWrap: "break-word",
          }}
        >
          Equalist | Animal lover | Happy child✨
          <br />
          Social media - krissann@theplugmedia.in
          <br />
          @theplugmedia.in
          <br />
          Acting inquiries -teamkrissann@gmail.com@talentgram.agency
        </div>
        <div
          className="Frame1226"
          style={{
            width: 390,
            height: 44,
            left: 0,
            top: 412,
            position: "absolute",
          }}
        >
          <div
            className="Frame1224"
            style={{
              width: 24,
              height: 24,
              paddingTop: 3,
              paddingBottom: 2,
              paddingLeft: 1,
              paddingRight: 1,
              left: 53,
              top: 10,
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Frame1225"
              style={{
                width: 22,
                height: 19,
                position: "relative",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "flex",
              }}
            >
              <div
                className="Rectangle673"
                style={{
                  width: 20,
                  height: 17,
                  background: "#592EBF",
                  border: "1.20px #592EBF solid",
                }}
              />
              <div
                className="Line308"
                style={{ width: 22, height: 0, border: "1.20px white solid" }}
              ></div>
              <div
                className="Line309"
                style={{
                  width: 9.22,
                  height: 0,
                  transform: "rotate(-49.40deg)",
                  transformOrigin: "0 0",
                  border: "1.20px white solid",
                }}
              ></div>
              <div
                className="Line310"
                style={{
                  width: 9.22,
                  height: 0,
                  transform: "rotate(-49.40deg)",
                  transformOrigin: "0 0",
                  border: "1.20px white solid",
                }}
              ></div>
              <div
                className="Line311"
                style={{
                  width: 9.22,
                  height: 0,
                  transform: "rotate(-49.40deg)",
                  transformOrigin: "0 0",
                  border: "1.20px white solid",
                }}
              ></div>
              <div
                className="Line312"
                style={{
                  width: 9.22,
                  height: 0,
                  transform: "rotate(-49.40deg)",
                  transformOrigin: "0 0",
                  border: "1.20px white solid",
                }}
              ></div>
            </div>
          </div>
          <div
            className="ShopIcon"
            style={{
              width: 24,
              height: 24,
              paddingTop: 2,
              paddingBottom: 2.64,
              paddingLeft: 2,
              paddingRight: 2,
              left: 183,
              top: 10,
              position: "absolute",
              boxShadow: "0px 0px 16px rgba(255, 255, 255, 0.35)",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Group174"
              style={{ width: 20, height: 19.36, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 20,
                  height: 13.48,
                  left: 0,
                  top: 5.88,
                  position: "absolute",
                  border: "1.20px #9E9D9D solid",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 9.06,
                  height: 9,
                  left: 5.47,
                  top: 0,
                  position: "absolute",
                  border: "1.20px #9E9D9D solid",
                }}
              ></div>
              <div
                className="Line62"
                style={{
                  width: 5,
                  height: 0,
                  left: 7.5,
                  top: 6.05,
                  position: "absolute",
                  border: "1.20px #9E9D9D solid",
                }}
              ></div>
            </div>
          </div>
          <div
            className="AllContentProducts"
            style={{
              width: 24,
              height: 24,
              left: 313,
              top: 10,
              position: "absolute",
            }}
          >
            <div
              className="Rectangle529"
              style={{
                width: 8.89,
                height: 11.11,
                left: 2,
                top: 2,
                position: "absolute",
                border: "1.20px #9E9D9D solid",
              }}
            />
            <div
              className="Rectangle530"
              style={{
                width: 8.89,
                height: 6.67,
                left: 13.11,
                top: 2,
                position: "absolute",
                border: "1.20px #9E9D9D solid",
              }}
            />
            <div
              className="Rectangle531"
              style={{
                width: 8.89,
                height: 11.11,
                left: 13.11,
                top: 10.89,
                position: "absolute",
                border: "1.20px #9E9D9D solid",
              }}
            />
            <div
              className="Rectangle532"
              style={{
                width: 8.89,
                height: 6.67,
                left: 2,
                top: 15.33,
                position: "absolute",
                border: "1.20px #9E9D9D solid",
              }}
            />
          </div>
          <div
            className="Line313"
            style={{
              width: 130,
              height: 0,
              left: 0,
              top: 44,
              position: "absolute",
              border: "1px #592EBF solid",
            }}
          ></div>
        </div>
        <div
          className="PayNow"
          style={{
            width: 116,
            height: 28,
            padding: 8,
            left: 261,
            top: 277,
            position: "absolute",
            background: "#592EBF",
            boxShadow: "2px 2px 0px #AB1AA1",
            borderRadius: 6,
            border: "0.50px solid",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div
            className="PlusIcon"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <img
              className="Union"
              style={{
                width: 12,
                height: 12,
                left: 3,
                top: 3,
                position: "absolute",
              }}
              src="https://via.placeholder.com/12x12"
            />
          </div>
          <div
            className="Follow"
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 11,
              fontFamily: "Sharp Grotesk",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Follow
          </div>
        </div>
        <div
          className="Rectangle674"
          style={{
            width: 128,
            height: 202,
            left: 2,
            top: 458,
            position: "absolute",
            background: "#D9D9D9",
          }}
        />
        <div
          className="Rectangle677"
          style={{
            width: 128,
            height: 202,
            left: 2,
            top: 661,
            position: "absolute",
            background: "#D9D9D9",
          }}
        />
        <div
          className="Rectangle675"
          style={{
            width: 128,
            height: 202,
            left: 131,
            top: 458,
            position: "absolute",
            background: "#D9D9D9",
          }}
        />
        <div
          className="Rectangle678"
          style={{
            width: 128,
            height: 202,
            left: 131,
            top: 661,
            position: "absolute",
            background: "#D9D9D9",
          }}
        />
        <div
          className="Rectangle676"
          style={{
            width: 128,
            height: 202,
            left: 260,
            top: 458,
            position: "absolute",
            background: "#D9D9D9",
          }}
        />
        <div
          className="Rectangle679"
          style={{
            width: 128,
            height: 202,
            left: 260,
            top: 661,
            position: "absolute",
            background: "#D9D9D9",
          }}
        />
        <div
          className="BottomNavUserEcosystem"
          style={{
            width: 390,
            height: 82,
            left: 0,
            top: 762,
            position: "absolute",
            background: "#05070B",
          }}
        >
          <img
            className="Subtract"
            style={{
              width: 390,
              height: 88,
              left: 0,
              top: -12,
              position: "absolute",
            }}
            src="https://via.placeholder.com/390x88"
          />
          <img
            className="NoiseTexture"
            style={{
              width: 390,
              height: 100,
              left: 0,
              top: -10,
              position: "absolute",
              opacity: 0.05,
              mixBlendMode: "screen",
            }}
            src="https://via.placeholder.com/390x100"
          />
          <div
            className="Ellipse297"
            style={{
              width: 42,
              height: 127,
              left: 27,
              top: 26,
              position: "absolute",
              opacity: 0.5,
              mixBlendMode: "screen",
              background: "white",
              boxShadow: "104px 104px 104px ",
              borderRadius: 9999,
              filter: "blur(104px)",
            }}
          />
          <div
            className="Frame907"
            style={{
              paddingLeft: 13,
              paddingRight: 12,
              left: 21,
              top: 17,
              position: "absolute",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 8,
              display: "inline-flex",
            }}
          >
            <div
              className="FeedIcon"
              style={{
                width: 24,
                height: 24,
                position: "relative",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "flex",
              }}
            >
              <div
                className="Line303"
                style={{ width: 20, height: 0, border: "1.50px white solid" }}
              ></div>
              <div
                className="Rectangle577"
                style={{ width: 20, height: 20, background: "#592EBF" }}
              />
              <div
                className="Rectangle576"
                style={{ width: 20, height: 14, border: "1.50px white solid" }}
              />
              <div
                className="Line304"
                style={{ width: 20, height: 0, border: "1.50px white solid" }}
              ></div>
            </div>
            <div
              className="Feed"
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 10,
                fontFamily: "Sharp Grotesk",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Feed
            </div>
          </div>
          <div
            className="Frame906"
            style={{
              width: 52,
              height: 42,
              left: 120,
              top: 17,
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Frame905"
              style={{
                flex: "1 1 0",
                alignSelf: "stretch",
                paddingLeft: 13,
                paddingRight: 13,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 8,
                display: "inline-flex",
              }}
            >
              <div
                className="ShopIcon"
                style={{
                  width: 24,
                  height: 24,
                  paddingTop: 2,
                  paddingBottom: 2.64,
                  paddingLeft: 2,
                  paddingRight: 2,
                  boxShadow: "0px 0px 16px rgba(255, 255, 255, 0.35)",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  className="Group175"
                  style={{ width: 20, height: 19.36, position: "relative" }}
                >
                  <div
                    className="Vector"
                    style={{
                      width: 20,
                      height: 13.48,
                      left: 0,
                      top: 5.88,
                      position: "absolute",
                      border: "1.50px #B4B4B4 solid",
                    }}
                  ></div>
                  <div
                    className="Vector"
                    style={{
                      width: 9.06,
                      height: 9,
                      left: 5.47,
                      top: 0,
                      position: "absolute",
                      border: "1.50px #B4B4B4 solid",
                    }}
                  ></div>
                  <div
                    className="Line62"
                    style={{
                      width: 5,
                      height: 0,
                      left: 7.5,
                      top: 6.05,
                      position: "absolute",
                      border: "1.50px #B4B4B4 solid",
                    }}
                  ></div>
                </div>
              </div>
              <div
                className="Shop"
                style={{
                  textAlign: "center",
                  color: "#B4B4B4",
                  fontSize: 10,
                  fontFamily: "Sharp Grotesk",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Shop
              </div>
            </div>
          </div>
          <div
            className="Frame904"
            style={{
              paddingLeft: 1,
              paddingRight: 2,
              left: 219,
              top: 17,
              position: "absolute",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "inline-flex",
            }}
          >
            <div
              className="MyItems"
              style={{
                width: 24,
                height: 24,
                position: "relative",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "flex",
              }}
            >
              <div
                className="Bookmark"
                style={{
                  width: 16,
                  height: 20.31,
                  border: "1.50px #B4B4B4 solid",
                }}
              ></div>
            </div>
            <div
              className="MyItems"
              style={{
                textAlign: "center",
                color: "#B4B4B4",
                fontSize: 10,
                fontFamily: "Sharp Grotesk",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              My Items
            </div>
          </div>
          <div
            className="Frame903"
            style={{
              height: 42,
              paddingLeft: 14,
              paddingRight: 14,
              left: 318,
              top: 17,
              position: "absolute",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "inline-flex",
            }}
          >
            <div
              className="UserProfileMyProfileIcon"
              style={{
                alignSelf: "stretch",
                height: 24,
                paddingLeft: 3,
                paddingRight: 3,
                paddingTop: 1,
                paddingBottom: 1,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="ForYou"
                style={{
                  width: 18,
                  height: 22,
                  background: "#B4B4B4",
                  border: "0.11px #B4B4B4 solid",
                }}
              ></div>
            </div>
            <div
              className="Me"
              style={{
                textAlign: "center",
                color: "#B4B4B4",
                fontSize: 10,
                fontFamily: "Sharp Grotesk",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Me
            </div>
          </div>
          <div
            className="HomeButton"
            style={{
              width: 94,
              height: 3,
              left: 148,
              top: 73,
              position: "absolute",
              background: "#B4B4B4",
              borderRadius: 4,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
