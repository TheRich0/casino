import React from "react";
import CoreMenu from "../components/Menu/CoreMenu";
import SidebarCore from "../components/Sidebar/SidebarCore";
import { UserProfileCard } from "../components/UserProfile";
import "../style/master.css";

/**
 * Homepage component
 */
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
  }

  toggleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  render() {
    return (
      <div className="homepage-container">
        <CoreMenu toggleSidebar={this.toggleSidebar} />
        <SidebarCore
          isOpen={this.state.sidebarOpen}
          toggleSidebar={this.toggleSidebar}
        />
        <div className="homepage">
          <section className="welcome-section py-10 px-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-4">
              Welcome to Cherry Casino
            </h1>
            <p className="text-gray-300 mb-8">
              Experience the thrill of our casino games and win big!
            </p>

            <div className="user-profile-section mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                Your Profile
              </h2>
              <UserProfileCard
                username="CherryPlayer"
                balance={1250.75}
                rank="Gold"
                onProfileClick={() => console.log("View full profile clicked")}
              />
            </div>

            <div className="featured-games">
              <h2 className="text-xl font-semibold text-white mb-4">
                Featured Games
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="game-card bg-[#191b24] rounded-lg overflow-hidden">
                  <div className="game-image h-32 bg-[#282c3c] flex items-center justify-center">
                    <span className="text-lg font-bold text-white">Mines</span>
                  </div>
                  <div className="game-info p-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Mines
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">
                      Find the treasures, avoid the mines
                    </p>
                    <a
                      href="/mines"
                      className="inline-block py-2 px-4 bg-[#f5a623] hover:bg-[#e69c1f] text-black font-medium rounded transition-colors duration-300"
                    >
                      Play Now
                    </a>
                  </div>
                </div>

                <div className="game-card bg-[#191b24] rounded-lg overflow-hidden">
                  <div className="game-image h-32 bg-[#282c3c] flex items-center justify-center">
                    <span className="text-lg font-bold text-white">Towers</span>
                  </div>
                  <div className="game-info p-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Towers
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">
                      Climb your way to the top for huge multipliers
                    </p>
                    <a
                      href="/towers"
                      className="inline-block py-2 px-4 bg-[#f5a623] hover:bg-[#e69c1f] text-black font-medium rounded transition-colors duration-300"
                    >
                      Play Now
                    </a>
                  </div>
                </div>

                <div className="game-card bg-[#191b24] rounded-lg overflow-hidden">
                  <div className="game-image h-32 bg-[#282c3c] flex items-center justify-center">
                    <span className="text-lg font-bold text-white">
                      Roulette
                    </span>
                  </div>
                  <div className="game-info p-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Roulette
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">
                      Classic casino game with a modern twist
                    </p>
                    <a
                      href="/roulette"
                      className="inline-block py-2 px-4 bg-[#f5a623] hover:bg-[#e69c1f] text-black font-medium rounded transition-colors duration-300"
                    >
                      Play Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
