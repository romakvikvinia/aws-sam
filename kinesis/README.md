# Kinesis Firehose

Mentioned topics <brt />

config for testing <brt />

# Send Data from

https://awslabs.github.io/amazon-kinesis-data-generato

{
"requestId": "{{random.number(9000)}}{{random.number(9000)}}{{random.number(9000)}}",
"ip":"{{random.number(255)}}.{{random.number(255)}}.{{random.number(255)}}.{{random.number(255)}}",
"requestTime":"{{date.now}}",
"status":"{{random.weightedArrayElement(
  {
    "weights": [0.7,0.2,0.2,0.2],
    "data": ["GET","POST","UPDATE","DELETE"]
  }
)}}",
"resourcePath":"{{random.arrayElement(["/aws","audible","blogs","serverless"])}}",
"status":"{{random.weightedArrayElement(
  {
    "weights": [0.7,0.3],
    "data": [200,400]
  }
)}}"
}
