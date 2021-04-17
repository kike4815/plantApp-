import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, icons, images, SIZES } from "../constants/";

const RequerimentBar = ({ icon, barPercentage }) => {
  return (
    <View style={{ height: 60, alignItems: "center" }}>
      <View
        style={{
          width: 50,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: COLORS.gray,
        }}
      >
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            width: 30,
            height: 30,
            tintColor: COLORS.secondary,
          }}
        />
      </View>
      {/* Bar */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.gray,
        }}
      ></View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: barPercentage,
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.primary,
        }}
      ></View>
    </View>
  );
};

const renderRequerimentsBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        justifyContent: "space-between",
      }}
    >
      <RequerimentBar icon={icons.sun} barPercentage="50%" />
      <RequerimentBar icon={icons.drop} barPercentage="25%" />
      <RequerimentBar icon={icons.temperature} barPercentage="80%" />
      <RequerimentBar icon={icons.garden} barPercentage="30%" />
      <RequerimentBar icon={icons.seed} barPercentage="50%" />
    </View>
  );
};

const RequerimentDetail = ({ icon, label, detail }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            tintColor: COLORS.secondary,
            width: 30,
            height: 30,
          }}
        />
        <Text
          style={{
            marginLeft: SIZES.base,
            color: COLORS.secondary,
            ...FONTS.h2,
          }}
        >
          {label}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Text
          style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.h2 }}
        >
          {detail}
        </Text>
      </View>
    </View>
  );
};

const renderRequeriments = () => {
  return (
    <View
      style={{
        flex: 2.5,
        marginTop: SIZES.padding,
        justifyContent: "space-around",
        paddingHorizontal: SIZES.padding,
      }}
    >
      <RequerimentDetail icon={icons.sun} label="Sunlight" detail="15ºC" />
      <RequerimentDetail
        icon={icons.drop}
        label="Water"
        detail="250 ML Daily"
      />
      <RequerimentDetail
        icon={icons.temperature}
        label="Room Temp"
        detail="25ºC"
      />
      <RequerimentDetail icon={icons.garden} label="Soil" detail="3 Kg" />
      <RequerimentDetail icon={icons.seed} label="Fertilizer" detail="150 Mg" />
    </View>
  );
};

const renderFooter = () => {
  return (
    <View
      style={{ flex: 1, flexDirection: "row", paddingVertical: SIZES.padding }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          backgroundColor: COLORS.primary,
          paddingHorizontal: SIZES.padding,
        }}
        onPress={() => console.log("touch footer")}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Take Action</Text>
        <Image
          source={icons.chevron}
          resizeMode="contain"
          style={{
            marginLeft: SIZES.padding,
            width: 20,
            height: 20,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Text style={{ flex: 1, color: COLORS.secondary, ...FONTS.h3 }}>
          Almost 2 weeks growing time
        </Text>
        <Image
          source={icons.downArrow}
          resizeMode="contain"
          style={{
            tintColor: COLORS.secondary,
            marginLeft: SIZES.primary,
            width: 20,
            height: 20,
          }}
        />
      </View>
    </View>
  );
};

const PlanDetail = ({ navigation }) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          position: "absolute",
          top: 50,
          left: SIZES.padding,
          right: SIZES.padding,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Image
                source={icons.back}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
            onPress={() => console.log("pressed on focus")}
          >
            <Image
              source={icons.focus}
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: "10%" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: COLORS.white, ...FONTS.largeTitle }}>
              Glory Mantas
            </Text>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* {Banner photo} */}
      <View style={{ height: "35%" }}>
        <Image
          source={images.bannerBg}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      {/* {requeriments} */}
      <View
        style={{
          flex: 1,
          marginTop: -40,
          backgroundColor: COLORS.lightGray,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingVertical: SIZES.padding,
        }}
      >
        <Text
          style={{
            color: COLORS.secondary,
            paddingHorizontal: SIZES.padding,
            ...FONTS.h1,
          }}
        >
          Requeriments
        </Text>
        {renderRequerimentsBar()}
        {renderRequeriments()}
        {renderFooter()}
      </View>
      {renderHeader()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default PlanDetail;
