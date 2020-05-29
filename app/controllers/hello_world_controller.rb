# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @hello_world_props =
      { name: "Stranger", brand_image_path: './assets/images/drawing.png',
        content: {
          slogan: 'MAKE INTERNET WORK FOR YOU',
          description: {
            first: 'Get what you Need Designed & Developed',
            second: 'Collect DATA in the most Efficient way',
            third: 'Make Happen what needs to Happen'
          }
        }
      }
  end
end
