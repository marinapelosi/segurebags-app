import {
  Box,
  Stack,
  Badge,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";
import { MapPinIcon } from "../OwnIcons/MapPinIcon";

export default function LenderCard(props) {
  const { badge, lender, variant } = props;

  return (
    <Box className="wrapper">
      <Box className="header">
        <Badge className={`header__badge header__badge--${badge.color}`}>
          {badge.text}
        </Badge>
        <Text
          className="header__title"
          fontSize={{ sm: "16px", md: "20px", lg: "24px" }}
        >
          {lender.name}
        </Text>
        <Stack align={"left"}>
          <Text className="header__sponsor">By {lender.sponsor}</Text>
          <Text className="header__location">
            <MapPinIcon /> {lender.location}
          </Text>
          <Text className="header__fundedText">
            Get Funded in <b>{lender.fundedDays} days.</b>
          </Text>
        </Stack>
        <Divider className="header__divider" />
        <Text className="text-purple header__rangeAmount">
          ${lender.rangeFirstAmount} - ${lender.rangeLastAmount}
        </Text>
      </Box>
      <Box className="footer">
        <Stack direction={"row"} align={"center"} justify={"space-between"}>
          <Text className="footer__title">About the Lender</Text>
          <Button variant={variant}>Learn More</Button>
        </Stack>
        <Text className="footer__description">
          {lender.about}
        </Text>
        <Stack align={"left"}>
          {lender.benefits.map((benefit, index) => (
            <Text
              key={index}
              className="footer__benefit"
            >
              {benefit}
            </Text>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
