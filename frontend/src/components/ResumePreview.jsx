import React from 'react';

function ResumePreview({ data }) {
  return (
    <div>
      <h1>{data.personalInfo.firstName} {data.personalInfo.lastName}</h1>
      <h2>{data.personalInfo.jobTitle}</h2>
      <p>{data.personalInfo.email} | {data.personalInfo.phone}</p>
      <p>{data.personalInfo.address}</p>
      {/* Render other sections like education, experience */}
    </div>
  );
}

export default ResumePreview; 