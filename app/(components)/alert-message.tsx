"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

//중복 호출 방지
let isDuplicateLoginAlerted = false;
let isRequiredLoginAlerted = false;
let isExpiredLoginAlerted = false;
let isInvalidLoginAlerted = false;

/**
 * URL query parameter로 전달된 alert 메시지를 alert로 띄워주는 컴포넌트, UI 없음
 */
function AlertMessage() {
  const searchParams = useSearchParams();
  const alertMessage = searchParams.get("alert");

  useEffect(() => {
    if (alertMessage === "duplicate") {
      if (isDuplicateLoginAlerted) return;
      isDuplicateLoginAlerted = true;
      alert("중복 로그인 감지\n다시 로그인 해주세요.");
    } else if (alertMessage === "required") {
      if (isRequiredLoginAlerted) return;
      isRequiredLoginAlerted = true;
      alert("로그인이 필요합니다.");
    } else if (alertMessage === "expired") {
      if (isExpiredLoginAlerted) return;
      isExpiredLoginAlerted = true;
      alert("세션이 만료되었습니다. 다시 로그인 해주세요.");
    } else if (alertMessage === "invalid") {
      if (isInvalidLoginAlerted) return;
      isInvalidLoginAlerted = true;
      alert("유효하지 않은 로그인 정보입니다. 다시 로그인 해주세요.");
    } else if (alertMessage) {
      alert(alertMessage);
    }
  }, [alertMessage]);

  return null;
}

export default AlertMessage;
