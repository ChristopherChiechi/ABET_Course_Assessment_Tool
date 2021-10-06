import React, { createContext, useContext, useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import cookieCutter from "cookie-cutter";
import jwt from "jsonwebtoken";
import unAuthPage from "../pages/unAuthPage";
const AuthStateContext = createContext();

export function useAuth() {
  return useContext(AuthStateContext);
}

function AuthProvider({ children }) {
  const ISSERVER = typeof window === "undefined";
  let role = "";
  let isLoading = true;
  if (!ISSERVER) {
    const token = cookieCutter.get("token");
    const json = jwt.decode(token);
    if (json == null) {
      role = null;
    } else {
      role = json.role;
    }
    console.log(role);
    isLoading = false;
  }
  const router = useRouter();
  let allowed = true;

  if (router.pathname.startsWith("/student") && role !== "Student") {
    allowed = false;
  }
  if (router.pathname.startsWith("/instructor") && role !== "Instructor") {
    allowed = false;
  }
  if (router.pathname.startsWith("/applicant") && role !== "applicant") {
    allowed = false;
  }
  if (router.pathname.startsWith("/admin") && role !== "Admin") {
    allowed = false;
  }

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      isLoading = false;
    });
    console.log(`LL: AuthProvider -> role`, role);
    if (!isLoading) {
      if (router.pathname == "/" && role == "Admin") {
        router.push("/adminHome");
      } else if (router.pathname == "/" && role == "Instructor") {
        router.push("/instructorHome");
      } else if (router.pathname == "/" && role == "Student") {
        router.push("/studentSurvey");
      }
      if (router.pathname.startsWith("/student") && role !== "Student") {
        if (role) {
          router.push("/unAuthPage");
        } else {
          router.push("/studentSurvey");
        }
      }
      if (router.pathname.startsWith("/instructor") && role !== "Instructor") {
        if (role) {
          router.push("/unAuthPage");
        } else {
          router.push("/instructorHome");
        }
      }
      if (router.pathname.startsWith("/applicant") && role !== "applicant") {
        if (role) {
          router.push("/unAuthPage");
        } else {
          router.push("/");
        }
      }
      if (router.pathname.startsWith("/admin") && role !== "Admin") {
        if (role) {
          router.push("/unAuthPage");
        } else {
          router.push("/adminHome");
        }
      }
    }
  }, [role, router]);

  const contextValue = useMemo(() => [allowed, role], [allowed, role]);
  const ComponentToRender = allowed ? children : unAuthPage;

  return (
    <AuthStateContext.Provider value={contextValue}>
      {ComponentToRender}
    </AuthStateContext.Provider>
  );
}

export { AuthProvider };
