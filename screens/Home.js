import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";

const Home = ({ navigation }) => {
  const [newPlants, setnewPlants] = useState([
    {
      id: "0",
      name: "Plant 1",
      image: images.plant1,
      favourite: false,
    },
    {
      id: "1",
      name: "Plant 2",
      image: images.plant2,
      favourite: true,
    },
    {
      id: "2",
      name: "Plant 3",
      image: images.plant3,
      favourite: false,
    },
    {
      id: "3",
      name: "Plant 4",
      image: images.plant3,
      favourite: false,
    },
  ]);

  const [friends, setFriends] = useState([
    { id: 0, img: images.profile1 },
    { id: 1, img: images.profile2 },
    { id: 2, img: images.profile3 },
    { id: 3, img: images.profile4 },
    { id: 4, img: images.profile5 },
  ]);

  const renderNewPlants = (item, index) => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: SIZES.base,
        }}
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{ width: SIZES.width * 0.23, height: "82%", borderRadius: 15 }}
        />
        <View
          style={{
            color: COLORS.white,
            position: "absolute",
            right: 0,
            bottom: "17%",
            backgroundColor: COLORS.primary,
            paddingHorizontal: SIZES.base,
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
            {item.name}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log(navigation.navigate("PlanDetail"))}
          style={{
            position: "absolute",
            left: 7,
            top: "15%",
          }}
        >
          <Image
            source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderFriends = () => {
    if (friends.length == 0) {
      return <View></View>;
    } else if (friends.length <= 3) {
      return friends.map((friend, index) => (
        <View
          key={`friend-${index}`}
          style={index == 0 ? {} : { marginLeft: -20 }}
        >
          <Image
            source={friend.img}
            resizeMode="cover"
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 3,
              borderColor: COLORS.primary,
            }}
          />
        </View>
      ));
    } else {
      return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {friends.map((friend, index) => {
            if (index <= 2) {
              return (
                <View
                  key={`friend-${index}`}
                  style={index == 0 ? {} : { marginLeft: -20 }}
                >
                  <Image
                    source={friend.img}
                    resizeMode="cover"
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      borderWidth: 3,
                      borderColor: COLORS.primary,
                    }}
                  />
                </View>
              );
            }
          })}
          <Text
            style={{ marginLeft: 5, color: COLORS.secondary, ...FONTS.body3 }}
          >
            +{friends.length - 3} More
          </Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {/*New plants*/}
      <View style={{ height: "30%", backgroundColor: COLORS.white }}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
        >
          <View
            style={{
              marginTop: SIZES.padding * 1.5,
              marginHorizontal: SIZES.padding,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                New Plants
              </Text>
              <TouchableOpacity
                onPress={() => console.log(navigation.navigate("PlanDetail"))}
              >
                <Image
                  source={icons.focus}
                  resizeMode="contain"
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: SIZES.base * 0.15 }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={newPlants}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => renderNewPlants(item, index)}
              />
            </View>
          </View>
        </View>
      </View>

      {/*Today's Share*/}
      <View style={{ height: "50%", backgroundColor: COLORS.lightGray }}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
        >
          <View
            style={{
              marginTop: SIZES.font,
              marginHorizontal: SIZES.padding,
              marginBottom: SIZES.font,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>
                Today's share
              </Text>
              <TouchableOpacity
                onPress={() => console.log(navigation.navigate("PlanDetail"))}
              >
                <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>
                  See all
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                height: "88%",
                marginTop: SIZES.base,
              }}
            >
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={{ flex: 1 }}
                  onPress={() => console.log(navigation.navigate("PlanDetail"))}
                >
                  <Image
                    source={images.plant5}
                    resizeMode="cover"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ flex: 1, marginTop: SIZES.font }}
                  onPress={() => console.log(navigation.navigate("PlanDetail"))}
                >
                  <Image
                    source={images.plant6}
                    resizeMode="cover"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1.3 }}>
                <TouchableOpacity
                  style={{ flex: 1, marginLeft: SIZES.font }}
                  onPress={() => console.log(navigation.navigate("PlanDetail"))}
                >
                  <Image
                    source={images.plant7}
                    resizeMode="cover"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/*Added Friend*/}
      <View style={{ height: "20%", backgroundColor: COLORS.lightGray }}>
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
          <View
            style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}
          >
            <Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>
              Added Friends
            </Text>
            <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>
              {friends.length} total
            </Text>
            <View style={{ flexDirection: "row", height: "55%" }}>
              {/* Friends */}
              <View
                style={{
                  flex: 1.3,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {renderFriends()}
              </View>
              {/*Add friend */}
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>
                  Add new
                </Text>
                <TouchableOpacity
                  style={{
                    marginLeft: 10,
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: COLORS.gray,
                  }}
                  onPress={() => console.log(navigation.navigate("PlanDetail"))}
                >
                  <Image
                    source={icons.plus}
                    resizeMode="contain"
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
