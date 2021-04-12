import { m } from "framer-motion";

export const emails = [
  {
    type: "Account setup",
    name: "Verification email",
    slug: "verification_email",
    subject: "Confirm your email address",
    timing: "Instantly"
  },
  {
    type: "Account setup",
    name: "Verification email – Reminder 1",
    slug: "verification_email_reminder_1",
    subject: "[Reminder] Confirm your email address",
    timing: "24 hours after 'Verification email'"
  },
  {
    type: "Account setup",
    name: "Verification email – Reminder 2",
    slug: "verification_email_reminder_2",
    subject: "[Action required] Confirm your email address",
    timing: "3 days after 'Verification email'"
  },
  {
    type: "Account setup",
    name: "Reminder 3: Verification email",
    slug: "verification_email_reminder_3",
    subject: "[Final reminder] Confirm your email address",
    timing: "7 days after 'Verification email'"
  },
  {
    type: "Account setup",
    name: "Admin invite",
    slug: "admin_invite",
    subject: "{{inviterEmail}} invited you to join {{accountName}} on LeadPro",
    timing: "Immediately"
  },
  {
    type: "Account setup",
    name: "Admin invite reminder 1",
    slug: "admin_invite_reminder_1",
    subject: "[PENDING INVITE] {{inviterEmail}} invited you to join {{accountName}} on LeadPro",
    timing: "24 hours after 'Admin user invitation email'"
  },
  {
    type: "Account setup",
    name: "Admin invite reminder 2",
    slug: "admin_invite_reminder_2",
    subject: "[ACTION REQUIRED] {{inviterEmail}} invited you to join {{accountName}} on LeadPro",
    timing: "3 days after 'Admin user invitation email'"
  },
  {
    type: "Account setup",
    name: "Admin invite reminder 3",
    slug: "admin_invite_reminder_3",
    subject: "Your pending LeadPro account will be deactivated in 30 days",
    timing: "7 days after 'Admin user invitation email'"
  },
  {
    type: "Account setup",
    name: "Admin Welcome Email",
    slug: "admin_welcome_email",
    subject: "🥳 Congratulations, you've setup up your LeadPro account!",
    timing: "Instant upon email verfication"
  },
  {
    type: "Account setup",
    name: "Agent Welcome Email",
    slug: "agent_welcome_email",
    subject: "🥳 Congratulations, you've setup up your LeadPro account!",
    timing: "Instant upon email verfication"
  },
  {
    type: "Authentication",
    name: "Password Reset Request",
    slug: "password_reset",
    subject: "Password reset instructions",
    timing: "Instant on request"
  },
  {
    type: "User Onboarding",
    name: "User invite",
    slug: "user_set_password",
    subject: "[Admin Name] invited you to LeadPro",
    timing: "Instant on request"
  },
  {
    type: "User Onboarding",
    name: "Training video",
    slug: "user_training_video",
    subject: "LeadPro Training",
    timing: "Instant on request"
  },
  {
    type: "User Onboarding",
    name: "Check in",
    slug: "user_checkin",
    subject: "How goes?",
    timing: "Instant on request"
  },
  {
    type: "User Onboarding",
    name: "Two week feedback",
    slug: "user_two_week_feedback",
    subject: "Your opinion",
    timing: "Instant on request"
  }
];
