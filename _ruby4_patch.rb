# _ruby4_patch.rb — loaded via RUBYOPT before any gem code runs
# Ruby 4.0 removed tainted? completely; Liquid 4.0.3 still calls it.
# tainted? has been a no-op returning false since Ruby 3.0, so this is safe.
class Object
  def tainted?
    false
  end
end unless Object.method_defined?(:tainted?)
