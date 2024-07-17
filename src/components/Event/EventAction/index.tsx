import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import React from "react";

const EventAction = ({ onPress, children }: TouchableOpacityProps) => (
  <TouchableOpacity className="" onPress={onPress}>
    {children}
  </TouchableOpacity>
);

export default EventAction;
