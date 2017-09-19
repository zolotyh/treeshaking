void main() {
  DateTime moonLanding = DateTime.parse("1969-07-20 20:18:00");
  print(moonLanding.add(new Duration(days: 14)).toString());
}
