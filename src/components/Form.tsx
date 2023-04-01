import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(),
  });

  const onsubmitData = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onsubmitData)}>
      <Flex justifyContent={"center"}>
        <FormControl p="5" mx="10" w="100%">
          <FormLabel fontWeight={"bold"} my={"3"}>
            First name
          </FormLabel>
          <Input
            id="firstname"
            placeholder="First name"
            {...register("firstname")}
          />
          {errors.firstname?.message && <FormErrorMessage> </FormErrorMessage>}
          <FormLabel fontWeight={"bold"} my={"3"}>
            Last name
          </FormLabel>
          <Input
            id="lastname"
            placeholder="Last name"
            {...register("lastname")}
          />

          <FormLabel fontWeight={"bold"} my={"3"}>
            Gender
          </FormLabel>
          <Select
            id="gender"
            placeholder="Select option"
            {...register("gender")}
          >
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </Select>

          <FormLabel fontWeight={"bold"} my={"3"}>
            Email
          </FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="email"
            {...register("email")}
          />

          <FormLabel fontWeight={"bold"} my={"3"}>
            password
          </FormLabel>
          <Input
            id="password"
            type="password"
            placeholder=" password"
            {...register("password")}
          />
          <FormLabel fontWeight={"bold"} my={"3"}>
            confirm password
          </FormLabel>
          <Input
            id="confirmpassword"
            type="password"
            placeholder=" confirm password"
            {...register("confirmPassword")}
          />

          <Button my="2" w="100%" type="submit" colorScheme="green">
            Submit
          </Button>
        </FormControl>
      </Flex>
    </form>
  );
};

export default Form;
