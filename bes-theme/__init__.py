
def format_section():
  return "My text"


app.jinja_env.globals.update(format_section=format_section)