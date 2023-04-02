import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormSchema } from "../schemas/form.schema";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  const onsubmitData = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onsubmitData)}>
      <Flex justifyContent={"center"} direction={"column"}>
        <FormControl
          mx="10"
          w="100%"
          isInvalid={!!errors["firstname"]?.message}
        >
          <FormLabel fontWeight={"bold"} my={"3"}>
            First name
          </FormLabel>
          <Input
            id="firstname"
            placeholder="First name"
            {...register("firstname")}
          />
          {errors["firstname"]?.message && (
            <FormErrorMessage>
              {errors["firstname"].message as any}
            </FormErrorMessage>
          )}
        </FormControl>
        <FormControl mx="10" w="100%">
          <FormLabel fontWeight={"bold"} my={"3"}>
            Last name
          </FormLabel>
          <Input
            id="lastname"
            placeholder="Last name"
            {...register("lastname")}
          />
        </FormControl>
        <FormControl mx="10" w="100%">
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
        </FormControl>
        <FormControl mx="10" w="100%">
          <FormLabel fontWeight={"bold"} my={"3"}>
            Email
          </FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="email"
            {...register("email")}
          />
        </FormControl>
        <FormControl mx="10" w="100%">
          <FormLabel fontWeight={"bold"} my={"3"}>
            password
          </FormLabel>
          <Input
            id="password"
            type="password"
            placeholder=" password"
            {...register("password")}
          />
        </FormControl>
        <FormControl mx="10" w="100%">
          <FormLabel fontWeight={"bold"} my={"3"}>
            confirm password
          </FormLabel>
          <Input
            id="confirmpassword"
            type="password"
            placeholder=" confirm password"
            {...register("confirmpassword")}
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
