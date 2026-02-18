# ruby4_compat.rb
# Ruby 4.0 removed tainted? completely. Liquid 4.0.3 still calls it.
# We patch Liquid::Variable directly since it's already loaded by this point.
# Safe: tainted? has been a no-op returning false since Ruby 3.0.
# NOTE: GitHub Pages ignores _plugins/ in --safe mode, so this is local-dev only.

Jekyll::Hooks.register :site, :after_reset do
  # no-op — just ensures this file is evaluated after Jekyll+Liquid are loaded
end

if defined?(Liquid::Variable) && Liquid::Variable.private_method_defined?(:taint_check)
  module Liquid
    class Variable
      private

      def taint_check(_obj)
        # Ruby 4.0 removed Object#tainted? — this is always a no-op anyway
      end
    end
  end
end
