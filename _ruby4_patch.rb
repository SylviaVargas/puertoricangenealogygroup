# _ruby4_patch.rb — loaded via RUBYOPT before any gem code runs
# Ruby 3.2+ removed tainted? and untaint; Liquid 4.0.3 still calls both.
# tainted? was a no-op (false) and untaint was a no-op (self) since Ruby 2.7, so this is safe.

unless Object.method_defined?(:tainted?)
  class Object
    def tainted?
      false
    end
  end
end

unless Object.method_defined?(:untaint)
  class Object
    def untaint
      self
    end
  end
end
