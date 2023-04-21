const int VRX = A3;
const int VRY= A1;
const int PUSH= 4;
const int LED1= 7;
const int LED2= 6;
const int LED3= 5;

int Xvalue;
int Yvalue;
int Pvalue;
int safe= 20;
bool pressed=false;

void setup() {
  pinMode(VRX, INPUT);
  pinMode(VRY, INPUT);
  pinMode(PUSH, INPUT);
  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);
  pinMode(LED3, OUTPUT);
  Serial.begin(9600);
}

void loop() {

  if (Serial.available() > 0) {
    receivingData();
  } else {
    sendingData();
  }
}

void sendingData() {

  Xvalue=analogRead(VRX);
  Yvalue=analogRead(VRY);
  Pvalue=digitalRead(PUSH);

  if((Xvalue > 506 + safe || Xvalue < 506 - safe || Yvalue > 513 + safe || Yvalue < 513 - safe || Pvalue > 0) && pressed==false){
  Serial.print(Xvalue);
  Serial.print(' ');
  Serial.print(Yvalue);
  Serial.print(' ');
  Serial.print(Pvalue);
  Serial.println();
  delay(300);
  pressed=true;
  } else if(Pvalue==0 && (Xvalue>=486 && Xvalue<=526) && (Yvalue>=493 && Yvalue<=533)){
  Serial.print(Xvalue);
  Serial.print(' ');
  Serial.print(Yvalue);
  Serial.print(' ');
  Serial.print(Pvalue);
  Serial.println();
  delay(300);
    pressed=false;
  };
}

void receivingData() {

  char inByte = Serial.read();

  switch (inByte) {
    case 'M':
      digitalWrite(LED1, HIGH);
      break;
    case 'R':
      digitalWrite(LED2, HIGH);
      break;
    case 'C':
      digitalWrite(LED3, HIGH);
      break;
    case 'm':
      digitalWrite(LED1, LOW);
      break;
    case 'r':
      digitalWrite(LED2, LOW);
      break;
    case 'c':
      digitalWrite(LED3, LOW);
      break;
  }
  Serial.flush();
}