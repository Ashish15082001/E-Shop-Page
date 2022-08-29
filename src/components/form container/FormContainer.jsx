import PrimaryButton from "../button/primary button/PrimaryButton";
import SecondaryButton from "../button/secondary button/SecondaryButton";
import Input from "../input/Input";
import {
  StyledButtonContainer,
  StyledFormContainer,
  StyledFormContainerTitle,
  StyledInputContainer,
  StyledShippingInfoContainer,
  StyledShippingInfoContainerTitle,
} from "./FormContainerStyles";
import { useSelector, useDispatch } from "react-redux";
import {
  setAddress,
  setCity,
  setCountry,
  setEmail,
  setFirstName,
  setLastName,
  setPhoneNumber,
  setPostalCode,
} from "../../redux/slice/shippingDetailsSlice";

export default function FormContainer() {
  const shippingDetails = useSelector((store) => store.shippingDetails);
  const dispatch = useDispatch();

  return (
    <StyledFormContainer>
      <StyledFormContainerTitle>Shiping and Payment</StyledFormContainerTitle>
      <StyledButtonContainer>
        <PrimaryButton buttonText="LOG IN" />
        <SecondaryButton buttonText="SIGN UP" />
      </StyledButtonContainer>
      <StyledShippingInfoContainer>
        <StyledShippingInfoContainerTitle>
          Shipping Information
        </StyledShippingInfoContainerTitle>
        <StyledInputContainer>
          <Input
            type="text"
            placeholder="Email"
            value={shippingDetails.email}
            onChange={(event) =>
              dispatch(setEmail({ email: event.target.value.trimStart() }))
            }
          />
          <Input
            type="text"
            placeholder="Address"
            value={shippingDetails.address}
            onChange={(event) =>
              dispatch(setAddress({ address: event.target.value.trimStart() }))
            }
          />
          <Input
            type="text"
            placeholder="First name"
            value={shippingDetails.firstName}
            onChange={(event) =>
              dispatch(
                setFirstName({ firstName: event.target.value.trimStart() })
              )
            }
          />
          <Input
            type="text"
            placeholder="City"
            value={shippingDetails.city}
            onChange={(event) =>
              dispatch(setCity({ city: event.target.value.trimStart() }))
            }
          />
          <Input
            type="text"
            placeholder="Last name"
            value={shippingDetails.lastName}
            onChange={(event) =>
              dispatch(
                setLastName({ lastName: event.target.value.trimStart() })
              )
            }
          />
          <Input
            type="text"
            placeholder="Postal Code / ZIP"
            value={shippingDetails.postalCode}
            onChange={(event) =>
              dispatch(
                setPostalCode({ postalCode: event.target.value.trimStart() })
              )
            }
          />
          <Input
            type="text"
            placeholder="Phone number"
            value={shippingDetails.phoneNumber}
            onChange={(event) =>
              dispatch(
                setPhoneNumber({ phoneNumber: event.target.value.trimStart() })
              )
            }
          />
          <Input
            type="text"
            placeholder="Poland"
            value={shippingDetails.country}
            onChange={(event) =>
              dispatch(setCountry({ country: event.target.value.trimStart() }))
            }
          />
        </StyledInputContainer>
      </StyledShippingInfoContainer>
    </StyledFormContainer>
  );
}
