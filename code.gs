function sendLeaveRequest(leaveRequestData) {
  try {
    const employeeName = leaveRequestData.employeeName;
    const managerEmail = leaveRequestData.managerEmail;
    const leaveType = leaveRequestData.leaveType;
    const startDate = leaveRequestData.startDate;
    const endDate = leaveRequestData.endDate;
    const reason = leaveRequestData.reason;
    const status = leaveRequestData.status;
    const duration = leaveRequestData.duration;
    const creationDateTime = leaveRequestData.creationDateTime;
    const annualLeaveBalance = leaveRequestData.annualLeaveBalance;
    const medicalLeaveBalance = leaveRequestData.medicalLeaveBalance;
    const unpaidLeaveBalance = leaveRequestData.unpaidLeaveBalance;
    const hospitalizationBalance = leaveRequestData.hospitalizationBalance;

    const subject = `Leave Request - ${employeeName} - ${leaveType}`;

    const body = `
Dear Manager,

This email notifies you that ${employeeName} (arlenkoo0905@gmail.com) has submitted a leave request for ${leaveType}.

Start Date: ${startDate}
End Date: ${endDate}
Reason: ${reason}
Status: ${status}
Duration: ${duration} days
Creation Date & Time: ${creationDateTime}

Leave Balances:
  - Annual Leave: ${annualLeaveBalance} days
  - Medical Leave: ${medicalLeaveBalance} days
  - Unpaid Leave: ${unpaidLeaveBalance} days
  - Hospitalization Leave: ${hospitalizationBalance} days

Please review and take necessary action.

Sincerely,

Automated Leave Tracker
`;

    GmailApp.sendEmail(managerEmail, subject, body);
  } catch (err) {
    console.error('Error sending leave request email:', err.message);
  }
}
