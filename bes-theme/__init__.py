
def format_section():
  return "My text"

print("Running Init!!!")
app.jinja_env.globals.update(format_section=format_section)s