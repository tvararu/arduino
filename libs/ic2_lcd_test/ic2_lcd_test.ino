/* www.osoyoo.com IC2 Liquid Crysal Testing program
   program tutorial : http://osoyoo.com/?p=72
   Copyright John Yu
   */
   
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
 
LiquidCrystal_I2C lcd(0x27,16,2);  // run ic2_scanner sketch and get the IC2 address, which is 0x27 in my case
 
void setup()
{
  lcd.init();                      // initialize the lcd
  

 
// set cursor to first line
lcd.setCursor(0, 0);

// Print a message to the LCD.
  lcd.backlight();
  lcd.print("Congradulations!");
  
  // set cursor to 2nd line
  lcd.setCursor(0, 1);
lcd.print("Osoyoo.com!");
}
 
void loop()
{
}