import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Card } from "../components/Card";
import DividerWithText from "../components/DividerWithText";
import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";
import useMounted from "../hooks/useMounted";

export default function Loginpage() {
  const history = useHistory();
  const { signInWithGoogle, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const location = useLocation();

  const mounted = useMounted();

  function handleRedirectToOrBack() {
    history.replace(location.state?.from ?? "/products");
  }

  return (
    <Layout>
      <Heading textAlign="center" my={12}>
        Login
      </Heading>
      <Card maxW="md" mx="auto" mt={4}>
        <chakra.form
          onSubmit={async (e) => {
            e.preventDefault();
            if (!email || !password) {
              toast({
                description: "Credentials not valid.",
                status: "error",
                duration: 9000,
                isClosable: true,
              });
              return;
            }
            setIsSubmitting(true);
            login(email, password)
              .then((res) => {
                handleRedirectToOrBack();
                toast({
                  description: "Login Success",
                  status: "success",
                  duration: 4000,
                  isClosable: true,
                });
                handleRedirectToOrBack();
              })
              .catch((error) => {
                toast({
                  description: error.message,
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
              })
              .finally(() => {
                mounted.current && setIsSubmitting(false);
              });
          }}
        >
          <Stack spacing="6">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                autoComplete="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="pink"
              size="lg"
              fontSize="md"
              isLoading={isSubmitting}
            >
              Sign in
            </Button>
          </Stack>
        </chakra.form>
        <HStack justifyContent="space-between" my={4}>
          <Button variant="link">
            <Link to="/forgot-password">Forgot password?</Link>
          </Button>
          <Button variant="link" onClick={() => history.push("/register")}>
            Register
          </Button>
        </HStack>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant="outline"
          isFullWidth
          colorScheme="red"
          leftIcon={<FaGoogle />}
          onClick={() =>
            signInWithGoogle()
              .then((user) => {
                handleRedirectToOrBack();
                localStorage.setItem("logged_User", JSON.stringify(user));
                history.push("/");
              })
              .catch((e) => console.log(e.message))
          }
        >
          Sign in with Google
        </Button>
      </Card>
    </Layout>
  );
}
